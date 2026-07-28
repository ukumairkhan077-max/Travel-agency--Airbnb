const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const Host = require("../models/Host");

/**
 * Same pattern as protectGuest, but for hosts. Kept as a fully separate
 * middleware (rather than one shared "protect" with a role flag) because
 * Guest and Host are genuinely separate identities in this app — see
 * AppContext.currentHost vs AuthContext.guestUser on the frontend.
 */
const protectHost = asyncHandler(async (req, res, next) => {
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

  if (decoded.role !== "host") {
    return res.status(403).json({ message: "This action requires a host account." });
  }

  const host = await Host.findById(decoded.id);
  if (!host) {
    return res.status(401).json({ message: "Host account no longer exists." });
  }

  req.host = host;
  next();
});

module.exports = { protectHost };