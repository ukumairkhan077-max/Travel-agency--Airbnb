const express = require("express");
const router = express.Router();

const {
  signupHost,
  loginHost,
  getCurrentHost,
} = require("../controllers/hostAuthController");
const { protectHost } = require("../middleware/hostAuthMiddleware");

// POST /api/host/auth/signup
router.post("/signup", signupHost);

// POST /api/host/auth/login
router.post("/login", loginHost);

// GET /api/host/auth/me
router.get("/me", protectHost, getCurrentHost);

module.exports = router;