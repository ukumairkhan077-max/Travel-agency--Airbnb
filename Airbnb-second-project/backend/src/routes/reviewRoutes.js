const express = require("express");
const router = express.Router();

const {
  getReviewsForTarget,
  createReview,
} = require("../controllers/reviewController");
const { protectGuest } = require("../middleware/authMiddleware");

// GET /api/reviews/:targetType/:targetId  (public — e.g. /home/<id> or /service/<id>)
router.get("/:targetType/:targetId", getReviewsForTarget);

// POST /api/reviews  (guest-only — write a review)
router.post("/", protectGuest, createReview);

module.exports = router;