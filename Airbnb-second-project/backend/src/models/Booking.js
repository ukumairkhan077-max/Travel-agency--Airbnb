const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
      index: true,
    },
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      index: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: null,
    },

    // --- Snapshot fields ---
    // Bookings are historical records: if a host edits the home's price or
    // title after a booking is made, the guest's receipt shouldn't change
    // retroactively. These are copied at booking time rather than looked
    // up live through the refs above.
    homeTitle: { type: String, required: true },
    serviceTitle: { type: String, default: null },

    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
    },
    paymentMethod: {
      type: String,
      enum: ["card", "easypaisa", "jazzcash"],
      required: true,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled", "completed"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

// Speeds up the "does this home have a conflicting booking for these
// dates" availability check used by the frontend's filter bar.
bookingSchema.index({ homeId: 1, checkIn: 1, checkOut: 1 });

module.exports = mongoose.model("Booking", bookingSchema);