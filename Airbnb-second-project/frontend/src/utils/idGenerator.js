// Small helpers for generating unique ids without pulling in an extra dependency.

export function generateNumericId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

export function slugify(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function generateServiceId(title) {
  const base = slugify(title) || "service";
  return `${base}-${Date.now().toString(36)}`;
}

export function generateHostId() {
  return `host-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function generateBookingId() {
  return `BK-${Date.now().toString(36).toUpperCase()}`;
}