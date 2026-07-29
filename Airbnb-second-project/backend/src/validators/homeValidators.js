function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isPositiveNumber(value) {
  const num = Number(value);
  return !Number.isNaN(num) && num > 0;
}

function validateHomePayload(body) {
  const errors = [];
  const {
    title,
    description,
    country,
    city,
    area,
    fullAddress,
    price,
    host,
    images,
    amenities,
    maxGuests,
  } = body;

  if (!title || !title.trim()) errors.push("Title is required.");
  if (!description || !description.trim()) errors.push("Description is required.");
  if (!country || !country.trim()) errors.push("Country is required.");
  if (!city || !city.trim()) errors.push("City is required.");
  if (!area || !area.trim()) errors.push("Area is required.");
  if (!fullAddress || !fullAddress.trim()) errors.push("Full address is required.");
  if (!isPositiveNumber(price)) errors.push("Price must be a positive number.");
  if (!host || !host.trim()) errors.push("Host name is required.");
  if (!isPositiveNumber(maxGuests)) errors.push("Max guests must be a positive number.");

  if (!Array.isArray(images) || images.length === 0) {
    errors.push("At least one image is required.");
  } else if (images.some((img) => !isValidImageUrl(img))) {
    errors.push("One or more image URLs are invalid.");
  }

  if (!Array.isArray(amenities) || amenities.length === 0) {
    errors.push("At least one amenity is required.");
  }

  return errors;
}

module.exports = { validateHomePayload, isValidImageUrl, isPositiveNumber };