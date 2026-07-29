function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || "").trim());
}

// Pakistani mobile numbers, e.g. 03001234567 — mirrors the frontend's
// utils/validators.js so client and server agree on what's valid.
function isValidPhone(phone) {
  return /^03\d{9}$/.test((phone || "").trim());
}

function isValidCNIC(cnic) {
  const value = (cnic || "").trim();
  return /^\d{5}-\d{7}-\d{1}$/.test(value) || /^\d{13}$/.test(value);
}

function validateGuestSignup(body) {
  const errors = [];
  const { fullName, email, password } = body;

  if (!fullName || !fullName.trim()) errors.push("Full name is required.");
  if (!isValidEmail(email)) errors.push("Enter a valid email.");
  if (!password || password.length < 6)
    errors.push("Password must be at least 6 characters.");

  return errors;
}

function validateGuestLogin(body) {
  const errors = [];
  const { email, password } = body;

  if (!isValidEmail(email)) errors.push("Enter a valid email.");
  if (!password) errors.push("Password is required.");

  return errors;
}

function validateHostSignup(body) {
  const errors = [];
  const { fullName, email, password, phone, cnic, city, address } = body;

  if (!fullName || !fullName.trim()) errors.push("Full name is required.");
  if (!isValidEmail(email)) errors.push("Enter a valid email.");
  if (!password || password.length < 6)
    errors.push("Password must be at least 6 characters.");
  if (!isValidPhone(phone)) errors.push("Enter a valid phone number (03XXXXXXXXX).");
  if (!isValidCNIC(cnic)) errors.push("Enter a valid CNIC (e.g. 42101-1234567-1).");
  if (!city || !city.trim()) errors.push("City is required.");
  if (!address || !address.trim()) errors.push("Address is required.");

  return errors;
}

module.exports = {
  validateGuestSignup,
  validateGuestLogin,
  validateHostSignup,
};