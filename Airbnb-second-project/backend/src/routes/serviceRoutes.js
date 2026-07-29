const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getServiceById,
  getMyServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const { protectHost } = require("../middleware/hostAuthMiddleware");

// GET /api/services  (public — powers Services page, FilterBar)
router.get("/", getAllServices);

// GET /api/services/mine  (host-only — My Services)
router.get("/mine", protectHost, getMyServices);

// GET /api/services/:id  (public — powers ServiceDetail)
router.get("/:id", getServiceById);

// POST /api/services  (host-only — Create Service)
router.post("/", protectHost, createService);

// PUT /api/services/:id  (host-only, must own it — Edit Service)
router.put("/:id", protectHost, updateService);

// DELETE /api/services/:id  (host-only, must own it — My Services delete)
router.delete("/:id", protectHost, deleteService);

module.exports = router;