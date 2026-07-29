const asyncHandler = require("../utils/asyncHandler");
const generateToken = require("../utils/generateToken");
const Host = require("../models/Host");
const { validateHostSignup } = require("../validators/authValidators");

function sanitizeHost(host) {
  return {
    id: host._id,
    fullName: host.fullName,
    email: host.email,
    phone: host.phone,
    cnic: host.cnic,
    city: host.city,
    address: host.address,
    createdAt: host.createdAt,
  };
}

// POST /api/host/auth/signup
const signupHost = asyncHandler(async (req, res) => {
  const errors = validateHostSignup(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  const { fullName, email, password, phone, cnic, city, address } = req.body;
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await Host.findOne({ email: normalizedEmail });
  if (existing) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

  const host = await Host.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    password,
    phone: phone.trim(),
    cnic: cnic.trim(),
    city: city.trim(),
    address: address.trim(),
  });

  const token = generateToken(host._id, "host");

  res.status(201).json({ host: sanitizeHost(host), token });
});

// POST /api/host/auth/login
const loginHost = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const host = await Host.findOne({ email: normalizedEmail }).select("+password");

  if (!host || !(await host.comparePassword(password))) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  const token = generateToken(host._id, "host");

  res.json({ host: sanitizeHost(host), token });
});

// GET /api/host/auth/me
const getCurrentHost = asyncHandler(async (req, res) => {
  res.json({ host: sanitizeHost(req.host) });
});

module.exports = { signupHost, loginHost, getCurrentHost };