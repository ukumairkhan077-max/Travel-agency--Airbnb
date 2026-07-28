/**
 * Centralized error handler — every asyncHandler-wrapped controller that
 * throws ends up here instead of crashing the server or leaking a raw
 * stack trace to the client.
 *
 * Must be registered LAST in app.js, after all routes.
 */
function errorHandler(err, req, res, next) {
  console.error(err);

  // Mongoose validation errors (e.g. required field missing, min/max
  // violated) get a friendlier 400 instead of a generic 500.
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: messages.join(" ") });
  }

  // Duplicate key error (e.g. email already registered)
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || "field";
    return res.status(409).json({ message: `This ${field} is already in use.` });
  }

  // Invalid MongoDB ObjectId format (e.g. malformed :id in a URL)
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  const statusCode = err.statusCode && err.statusCode >= 400 ? err.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || "Something went wrong on the server.",
  });
}

module.exports = errorHandler;