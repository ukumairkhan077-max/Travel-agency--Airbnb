const express = require("express");
const router = express.Router();

const {
  signupGuest,
  loginGuest,
  getCurrentGuest,
} = require("../controllers/authController");
const { protectGuest } = require("../middleware/authMiddleware");

// POST /api/auth/signup
router.post("/signup", signupGuest);

// POST /api/auth/login
router.post("/login", loginGuest);

// GET /api/auth/me  (returns the logged-in guest, used to restore session on refresh)
router.get("/me", protectGuest, getCurrentGuest);

module.exports = router;