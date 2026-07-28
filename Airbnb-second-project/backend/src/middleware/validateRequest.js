/**
 * Generic validation-runner middleware. Pass it a validator function (from
 * src/validators/*.js) that takes req.body and returns either:
 *   - null / undefined            -> valid, request proceeds
 *   - a string / array of strings -> invalid, request is rejected with 400
 *
 * Usage in a route:
 *   const { validateHomePayload } = require("../validators/homeValidators");
 *   router.post("/", protectHost, validateRequest(validateHomePayload), createHome);
 */
function validateRequest(validatorFn) {
  return function runValidation(req, res, next) {
    const errors = validatorFn(req.body);

    if (!errors || (Array.isArray(errors) && errors.length === 0)) {
      return next();
    }

    const message = Array.isArray(errors) ? errors.join(" ") : errors;
    return res.status(400).json({ message });
  };
}

module.exports = validateRequest;