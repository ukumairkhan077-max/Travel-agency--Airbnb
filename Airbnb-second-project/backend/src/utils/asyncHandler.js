/**
 * Wraps an async Express controller so any thrown error/rejected Promise
 * is automatically forwarded to next(error) — meaning your controllers can
 * just `throw` or `await` freely without wrapping every one in try/catch.
 * errorHandler.js is what actually turns that forwarded error into a
 * JSON response.
 */
function asyncHandler(fn) {
  return function wrapped(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = asyncHandler;