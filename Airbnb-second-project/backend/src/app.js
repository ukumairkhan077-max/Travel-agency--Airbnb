const express = require("express");
const cors = require("cors");

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

// Route mounting happens here once you build src/routes/index.js
// app.use("/api", require("./routes"));

module.exports = app;