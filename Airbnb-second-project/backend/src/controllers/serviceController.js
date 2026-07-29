const asyncHandler = require("../utils/asyncHandler");
const Service = require("../models/Service");
const { validateServicePayload } = require("../validators/serviceValidators");

// GET /api/services?city=Lahore&category=Massage&minPrice=0&maxPrice=200&guests=2
const getAllServices = asyncHandler(async (req, res) => {
  const { city, category, minPrice, maxPrice, guests } = req.query;
  const filter = {};

  if (city) filter["location.city"] = city;
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.priceFrom = {};
    if (minPrice) filter.priceFrom.$gte = Number(minPrice);
    if (maxPrice) filter.priceFrom.$lte = Number(maxPrice);
  }
  if (guests) {
    filter["guestRequirements.minGuests"] = { $lte: Number(guests) };
    filter["guestRequirements.maxGuests"] = { $gte: Number(guests) };
  }

  const services = await Service.find(filter).sort({ createdAt: -1 });
  res.json(services);
});

// GET /api/services/:id
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ message: "Service not found." });
  }
  res.json(service);
});

// GET /api/services/mine
const getMyServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ hostId: req.host._id }).sort({ createdAt: -1 });
  res.json(services);
});

// POST /api/services
const createService = asyncHandler(async (req, res) => {
  const errors = validateServicePayload(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  const service = await Service.create({
    ...req.body,
    hostId: req.host._id,
  });

  res.status(201).json(service);
});

// PUT /api/services/:id
const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found." });
  }
  if (service.hostId.toString() !== req.host._id.toString()) {
    return res
      .status(403)
      .json({ message: "You don't have permission to edit this service." });
  }

  const merged = { ...service.toObject(), ...req.body };
  const errors = validateServicePayload(merged);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  Object.assign(service, req.body);
  await service.save();

  res.json(service);
});

// DELETE /api/services/:id
const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found." });
  }
  if (service.hostId.toString() !== req.host._id.toString()) {
    return res
      .status(403)
      .json({ message: "You don't have permission to delete this service." });
  }

  await service.deleteOne();
  res.json({ message: "Service deleted.", id: req.params.id });
});

module.exports = {
  getAllServices,
  getServiceById,
  getMyServices,
  createService,
  updateService,
  deleteService,
};