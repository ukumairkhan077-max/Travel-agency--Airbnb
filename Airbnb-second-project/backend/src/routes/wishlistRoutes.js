const express = require("express");
const router = express.Router();

const {
  getMyWishlist,
  toggleWishlistItem,
} = require("../controllers/wishlistController");
const { protectGuest } = require("../middleware/authMiddleware");

// All wishlist routes require a logged-in guest.
router.use(protectGuest);

// GET /api/wishlist  (Wishlist page)
router.get("/", getMyWishlist);

// POST /api/wishlist/toggle  (heart-click on Listingcard/ServiceCard/HeroService)
router.post("/toggle", toggleWishlistItem);

module.exports = router;