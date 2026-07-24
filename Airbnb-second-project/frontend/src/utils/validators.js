// Shared, dependency-free validation helpers used across the Host forms.

export function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || "").trim());
}

// Pakistani mobile numbers, e.g. 03001234567
export function isValidPhone(phone) {
  return /^03\d{9}$/.test((phone || "").trim());
}

// Accepts 42101-1234567-1 or 4210112345671
export function isValidCNIC(cnic) {
  const value = (cnic || "").trim();
  return /^\d{5}-\d{7}-\d{1}$/.test(value) || /^\d{13}$/.test(value);
}

export function isPositiveNumber(value) {
  const num = Number(value);
  return !Number.isNaN(num) && num > 0;
}

export function isNonNegativeNumber(value) {
  const num = Number(value);
  return !Number.isNaN(num) && num >= 0;
}