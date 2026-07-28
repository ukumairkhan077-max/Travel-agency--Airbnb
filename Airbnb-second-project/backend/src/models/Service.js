const mongoose = require("mongoose");

// Sub-services are only ever accessed as part of their parent service, so
// they're embedded rather than a separate collection — this matches the
// nested shape the frontend's ServiceForm already sends.
const subServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    priceUnit: {
      type: String,
      enum: ["guest", "group", "session", "hour"],
      default: "guest",
    },
    duration: { type: String, required: true },
  },
  { _id: true }
);

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    priceFrom: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      enum: ["USD", "PKR"],
      default: "USD",
    },
    priceUnit: {
      type: String,
      enum: ["guest", "group", "session", "hour"],
      default: "guest",
    },
    minimumToBook: {
      type: Number,
      default: null,
    },
    location: {
      city: { type: String, required: true, index: true },
      area: { type: String, required: true },
      country: { type: String, required: true },
      postcode: { type: String, default: "" },
      providedAt: { type: String, default: "" },
    },
    provider: {
      name: { type: String, required: true },
      avatar: { type: String, default: "" },
      title: { type: String, default: "" },
      experienceYears: { type: Number, default: 0 },
      experienceSummary: { type: String, default: "" },
      careerHighlight: { type: String, default: "" },
      education: { type: String, default: "" },
    },
    cancellationPolicy: {
      type: String,
      default: "",
    },
    guestRequirements: {
      minAge: { type: Number, default: 0 },
      minGuests: { type: Number, default: 1 },
      maxGuests: { type: Number, required: true },
    },
    subServices: {
      type: [subServiceSchema],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one sub service is required.",
      },
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
      required: true,
      index: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    badge: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);