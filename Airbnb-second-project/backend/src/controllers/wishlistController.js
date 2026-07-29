const asyncHandler = require("../utils/asyncHandler");
const Wishlist = require("../models/Wishlist");

const MODEL_BY_TYPE = { home: "Home", service: "Service" };

// GET /api/wishlist
const getMyWishlist = asyncHandler(async (req, res) => {
  const items = await Wishlist.find({ guestId: req.guest._id })
    .populate("itemId") // dynamic populate via refPath on the schema
    .sort({ createdAt: -1 });

  res.json(items);
});

// POST /api/wishlist/toggle   body: { type: "home" | "service", itemId }
const toggleWishlistItem = asyncHandler(async (req, res) => {
  const { type, itemId } = req.body;

  if (!MODEL_BY_TYPE[type] || !itemId) {
    return res.status(400).json({ message: "A valid type and itemId are required." });
  }

  const existing = await Wishlist.findOne({
    guestId: req.guest._id,
    type,
    itemId,
  });

  if (existing) {
    await existing.deleteOne();
    return res.json({ saved: false });
  }

  await Wishlist.create({
    guestId: req.guest._id,
    type,
    itemId,
    itemModel: MODEL_BY_TYPE[type],
  });

  res.json({ saved: true });
});

module.exports = { getMyWishlist, toggleWishlistItem };