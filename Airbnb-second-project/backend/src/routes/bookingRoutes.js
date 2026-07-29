const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getBookingById,
  getHostBookings,
  checkAvailability,
} = require("../controllers/bookingController");
const { protectGuest } = require("../middleware/authMiddleware");
const { protectHost } = require("../middleware/hostAuthMiddleware");

// GET /api/bookings/availability?homeId=...&checkIn=...&checkOut=...
// (public — powers the frontend's isHomeAvailable() date-conflict filter)
router.get("/availability", checkAvailability);

// POST /api/bookings  (guest-only — Confirm & Pay)
router.post("/", protectGuest, createBooking);

// GET /api/bookings/mine  (guest-only — GuestTrips "My Trips")
router.get("/mine", protectGuest, getMyBookings);

// GET /api/bookings/host/mine  (host-only — HostBookings, dashboard revenue)
router.get("/host/mine", protectHost, getHostBookings);

// GET /api/bookings/:id  (guest-only, must own it — ThankYou / View Booking)
router.get("/:id", protectGuest, getBookingById);

module.exports = router;