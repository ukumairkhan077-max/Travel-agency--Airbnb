const asyncHandler = require("../utils/asyncHandler");
const Review = require("../models/Review");
const Home = require("../models/Home");
const Service = require("../models/Service");

const MODEL_BY_TYPE = { home: "Home", service: "Service" };

// Recomputes and stores the average rating (and review count, for
// services) on the target Home/Service after a new review is added —
// keeps the cards' displayed rating in sync without a live aggregation
// query on every page load.
async function refreshTargetRating(targetType, targetId) {
  const stats = await Review.aggregate([
    { $match: { targetType, targetId } },
    {
      $group: {
        _id: null,
        avgRating: { $avg: "$rating" },
        count: { $sum: 1 },
      },
    },
  ]);

  const { avgRating = 0, count = 0 } = stats[0] || {};

  if (targetType === "home") {
    await Home.findByIdAndUpdate(targetId, { rating: avgRating });
  } else {
    await Service.findByIdAndUpdate(targetId, {
      rating: avgRating,
      reviewCount: count,
    });
  }
}

// GET /api/reviews/:targetType/:targetId
const getReviewsForTarget = asyncHandler(async (req, res) => {
  const { targetType, targetId } = req.params;

  if (!MODEL_BY_TYPE[targetType]) {
    return res.status(400).json({ message: "Invalid review target type." });
  }

  const reviews = await Review.find({ targetType, targetId })
    .populate("authorId", "fullName")
    .sort({ createdAt: -1 });

  res.json(reviews);
});

// POST /api/reviews   body: { targetType, targetId, rating, comment }
const createReview = asyncHandler(async (req, res) => {
  const { targetType, targetId, rating, comment } = req.body;

  if (!MODEL_BY_TYPE[targetType]) {
    return res.status(400).json({ message: "Invalid review target type." });
  }
  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5." });
  }
  if (!comment || !comment.trim()) {
    return res.status(400).json({ message: "Comment is required." });
  }

  const review = await Review.create({
    authorId: req.guest._id,
    targetType,
    targetId,
    targetModel: MODEL_BY_TYPE[targetType],
    rating,
    comment: comment.trim(),
  });

  await refreshTargetRating(targetType, targetId);

  res.status(201).json(review);
});

module.exports = { getReviewsForTarget, createReview };