const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ["home", "service"],
      required: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "itemModel", // dynamic ref: points at Home or Service
    },
    itemModel: {
      type: String,
      required: true,
      enum: ["Home", "Service"],
    },
  },
  { timestamps: true }
);

// A guest can only save a given home/service once.
wishlistSchema.index({ guestId: 1, type: 1, itemId: 1 }, { unique: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);