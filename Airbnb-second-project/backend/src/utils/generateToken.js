const jwt = require("jsonwebtoken");

/**
 * Signs a JWT for either a guest or a host.
 * `role` gets embedded in the payload so a token issued for a guest can't
 * be reused to access host-only routes (and vice versa) even if someone
 * tries to pass one where the other is expected.
 */
function generateToken(id, role) {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

module.exports = generateToken;