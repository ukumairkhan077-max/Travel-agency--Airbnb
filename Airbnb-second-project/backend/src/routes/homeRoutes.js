const express = require("express");
const router = express.Router();

const {
  getAllHomes,
  getHomeById,
  getMyHomes,
  createHome,
  updateHome,
  deleteHome,
} = require("../controllers/homeController");
const { protectHost } = require("../middleware/hostAuthMiddleware");

// GET /api/homes  (public — powers Home page, /listings, FilterBar)
router.get("/", getAllHomes);

// GET /api/homes/mine  (host-only — powers My Homes / dashboard stats)
// Placed before "/:id" so "mine" isn't swallowed as an :id value.
router.get("/mine", protectHost, getMyHomes);

// GET /api/homes/:id  (public — powers Listingdetail)
router.get("/:id", getHomeById);

// POST /api/homes  (host-only — Create Home)
router.post("/", protectHost, createHome);

// PUT /api/homes/:id  (host-only, must own the home — Edit Home)
router.put("/:id", protectHost, updateHome);

// DELETE /api/homes/:id  (host-only, must own the home — My Homes delete)
router.delete("/:id", protectHost, deleteHome);

module.exports = router;