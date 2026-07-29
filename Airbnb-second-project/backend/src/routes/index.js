const express = require("express");
const router = express.Router();

router.use("/auth", require("./authRoutes"));
router.use("/host/auth", require("./hostAuthRoutes"));
router.use("/homes", require("./homeRoutes"));
router.use("/services", require("./serviceRoutes"));
router.use("/bookings", require("./bookingRoutes"));
router.use("/wishlist", require("./wishlistRoutes"));
router.use("/reviews", require("./reviewRoutes"));

module.exports = router;