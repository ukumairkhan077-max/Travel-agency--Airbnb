const asyncHandler = require("../utils/asyncHandler");
const Booking = require("../models/Booking");
const Home = require("../models/Home");
const Service = require("../models/Service");

// Shared overlap check, used by both the public availability endpoint and
// createBooking's own server-side re-check (never trust the client's word
// that dates are free — always re-verify before writing to the DB).
async function hasConflict(homeId, checkIn, checkOut) {
  const conflict = await Booking.findOne({
    homeId,
    status: { $ne: "cancelled" },
    checkIn: { $lt: new Date(checkOut) },
    checkOut: { $gt: new Date(checkIn) },
  });
  return Boolean(conflict);
}

// GET /api/bookings/availability?homeId=...&checkIn=...&checkOut=...
const checkAvailability = asyncHandler(async (req, res) => {
  const { homeId, checkIn, checkOut } = req.query;

  if (!homeId || !checkIn || !checkOut) {
    return res.json({ available: true }); // no dates selected yet — don't block
  }

  const conflict = await hasConflict(homeId, checkIn, checkOut);
  res.json({ available: !conflict });
});

// POST /api/bookings
const createBooking = asyncHandler(async (req, res) => {
  const {
    homeId,
    serviceId,
    checkIn,
    checkOut,
    guests,
    paymentMethod,
    total,
  } = req.body;

  if (!homeId || !checkIn || !checkOut || !guests || !paymentMethod || !total) {
    return res.status(400).json({ message: "Missing required booking details." });
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    return res.status(400).json({ message: "Check-out date must be after check-in." });
  }

  const home = await Home.findById(homeId);
  if (!home) {
    return res.status(404).json({ message: "Home not found." });
  }

  // Re-verify availability server-side even if the frontend already checked.
  const conflict = await hasConflict(homeId, checkIn, checkOut);
  if (conflict) {
    return res.status(409).json({ message: "These dates are no longer available." });
  }

  let serviceTitle = null;
  if (serviceId) {
    const service = await Service.findById(serviceId);
    if (service) serviceTitle = service.title;
  }

  const booking = await Booking.create({
    guestId: req.guest._id,
    homeId,
    serviceId: serviceId || null,
    homeTitle: home.title,
    serviceTitle,
    checkIn,
    checkOut,
    guests,
    paymentMethod,
    total,
  });

  res.status(201).json(booking);
});

// GET /api/bookings/mine
const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ guestId: req.guest._id }).sort({ createdAt: -1 });
  res.json(bookings);
});

// GET /api/bookings/:id
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found." });
  }
  if (booking.guestId.toString() !== req.guest._id.toString()) {
    return res.status(403).json({ message: "You don't have permission to view this booking." });
  }

  res.json(booking);
});

// GET /api/bookings/host/mine  (all bookings across this host's homes)
const getHostBookings = asyncHandler(async (req, res) => {
  const myHomeIds = await Home.find({ hostId: req.host._id }).distinct("_id");
  const bookings = await Booking.find({ homeId: { $in: myHomeIds } }).sort({
    createdAt: -1,
  });

  res.json(bookings);
});

module.exports = {
  createBooking,
  getMyBookings,
  getBookingById,
  getHostBookings,
  checkAvailability,
};