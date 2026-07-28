const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      index: true, // homes are frequently filtered/grouped by city
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    fullAddress: {
      type: String,
      required: true,
    },
    // Combined display string ("Area, City, Country") — kept so it matches
    // the frontend's existing `location` field without extra assembly.
    location: {
      type: String,
      required: true,
    },
    googleMapUrl: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      required: true,
      enum: ["PKR", "USD"],
      default: "PKR",
    },
    maxGuests: {
      type: Number,
      required: true,
      min: 1,
    },
    host: {
      type: String, // display name shown on the card, e.g. "Hosted by Ayesha"
      required: true,
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
      required: true,
      index: true,
    },
    images: {
      type: [String],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one image is required.",
      },
    },
    amenities: {
      type: [String],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one amenity is required.",
      },
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Home", homeSchema);