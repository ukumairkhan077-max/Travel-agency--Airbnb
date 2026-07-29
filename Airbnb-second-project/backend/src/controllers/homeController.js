const asyncHandler = require("../utils/asyncHandler");
const Home = require("../models/Home");
const { validateHomePayload } = require("../validators/homeValidators");

// GET /api/homes?city=Lahore&minPrice=5000&maxPrice=45000&guests=2
const getAllHomes = asyncHandler(async (req, res) => {
  const { city, minPrice, maxPrice, guests, amenities } = req.query;
  const filter = {};

  if (city) filter.city = city;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  if (guests) filter.maxGuests = { $gte: Number(guests) };
  if (amenities) {
    const amenityList = Array.isArray(amenities) ? amenities : amenities.split(",");
    filter.amenities = { $all: amenityList };
  }

  const homes = await Home.find(filter).sort({ createdAt: -1 });
  res.json(homes);
});

// GET /api/homes/:id
const getHomeById = asyncHandler(async (req, res) => {
  const home = await Home.findById(req.params.id);
  if (!home) {
    return res.status(404).json({ message: "Home not found." });
  }
  res.json(home);
});

// GET /api/homes/mine
const getMyHomes = asyncHandler(async (req, res) => {
  const homes = await Home.find({ hostId: req.host._id }).sort({ createdAt: -1 });
  res.json(homes);
});

// POST /api/homes
const createHome = asyncHandler(async (req, res) => {
  const errors = validateHomePayload(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  const home = await Home.create({
    ...req.body,
    hostId: req.host._id,
  });

  res.status(201).json(home);
});

// PUT /api/homes/:id
const updateHome = asyncHandler(async (req, res) => {
  const home = await Home.findById(req.params.id);

  if (!home) {
    return res.status(404).json({ message: "Home not found." });
  }
  if (home.hostId.toString() !== req.host._id.toString()) {
    return res.status(403).json({ message: "You don't have permission to edit this home." });
  }

  const errors = validateHomePayload({ ...home.toObject(), ...req.body });
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  Object.assign(home, req.body);
  await home.save();

  res.json(home);
});

// DELETE /api/homes/:id
const deleteHome = asyncHandler(async (req, res) => {
  const home = await Home.findById(req.params.id);

  if (!home) {
    return res.status(404).json({ message: "Home not found." });
  }
  if (home.hostId.toString() !== req.host._id.toString()) {
    return res.status(403).json({ message: "You don't have permission to delete this home." });
  }

  await home.deleteOne();
  res.json({ message: "Home deleted.", id: req.params.id });
});

module.exports = {
  getAllHomes,
  getHomeById,
  getMyHomes,
  createHome,
  updateHome,
  deleteHome,
};