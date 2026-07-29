const asyncHandler = require("../utils/asyncHandler");
const generateToken = require("../utils/generateToken");
const Guest = require("../models/Guest");
const {
  validateGuestSignup,
  validateGuestLogin,
} = require("../validators/authValidators");

function sanitizeGuest(guest) {
  return {
    id: guest._id,
    fullName: guest.fullName,
    email: guest.email,
    createdAt: guest.createdAt,
  };
}

// POST /api/auth/signup
const signupGuest = asyncHandler(async (req, res) => {
  const errors = validateGuestSignup(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  const { fullName, email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await Guest.findOne({ email: normalizedEmail });
  if (existing) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

  const guest = await Guest.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    password,
  });

  const token = generateToken(guest._id, "guest");

  res.status(201).json({ guest: sanitizeGuest(guest), token });
});

// POST /api/auth/login
const loginGuest = asyncHandler(async (req, res) => {
  const errors = validateGuestLogin(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  const { email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();

  // .select("+password") because the schema hides password by default
  const guest = await Guest.findOne({ email: normalizedEmail }).select("+password");

  if (!guest || !(await guest.comparePassword(password))) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  const token = generateToken(guest._id, "guest");

  res.json({ guest: sanitizeGuest(guest), token });
});

// GET /api/auth/me
const getCurrentGuest = asyncHandler(async (req, res) => {
  res.json({ guest: sanitizeGuest(req.guest) });
});

module.exports = { signupGuest, loginGuest, getCurrentGuest };