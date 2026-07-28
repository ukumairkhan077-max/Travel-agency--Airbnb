const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Parse incoming JSON request bodies
app.use(express.json());

// Allow your frontend's dev server to call this API
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Simple health check — hit this in a browser to confirm the server is up
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// All feature routes
app.use("/api", require("./routes"));

// Must be registered last — catches errors thrown/forwarded by any route above
app.use(errorHandler);

module.exports = app;