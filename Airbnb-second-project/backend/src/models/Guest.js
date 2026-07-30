const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const guestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // never returned by default in queries
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

// Hash the password before saving, only if it was changed/set.
// NOTE: async pre-save hooks in modern Mongoose resolve on their own
// promise — they do NOT receive a usable `next` callback. Declaring
// `next` and calling it here throws "next is not a function".
guestSchema.pre("save", async function hashPassword() {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Instance method used by the login controller to compare a plaintext
// password against the stored hash.
guestSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model("Guest", guestSchema);