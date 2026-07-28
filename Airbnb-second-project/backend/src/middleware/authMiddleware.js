const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const Guest = require("../models/Guest");

/**
 * Verifies a guest JWT from the Authorization header ("Bearer <token>"),
 * loads the corresponding Guest, and attaches it as req.guest.
 * Mirrors the frontend's ProtectedRoute.jsx — this is the real,
 * server-side version of that same guard.
 */
const protectGuest = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token." });
  }

  const token = authHeader.split(" ")[1];

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ message: "Not authorized, invalid token." });
  }

  if (decoded.role !== "guest") {
    return res.status(403).json({ message: "This action requires a guest account." });
  }

  const guest = await Guest.findById(decoded.id);
  if (!guest) {
    return res.status(401).json({ message: "Guest account no longer exists." });
  }

  req.guest = guest;
  next();
});

module.exports = { protectGuest };