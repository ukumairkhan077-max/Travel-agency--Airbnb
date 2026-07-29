const { isValidImageUrl, isPositiveNumber } = require("./homeValidators");

function validateServicePayload(body) {
  const errors = [];
  const {
    title,
    tagline,
    priceFrom,
    heroImage,
    location,
    provider,
    guestRequirements,
    subServices,
  } = body;

  if (!title || !title.trim()) errors.push("Title is required.");
  if (!tagline || !tagline.trim()) errors.push("Tagline is required.");
  if (!isPositiveNumber(priceFrom)) errors.push("Price From must be a positive number.");
  if (!isValidImageUrl(heroImage)) errors.push("Enter a valid hero image URL.");

  if (!location?.city?.trim()) errors.push("City is required.");
  if (!location?.area?.trim()) errors.push("Area is required.");
  if (!location?.country?.trim()) errors.push("Country is required.");

  if (!provider?.name?.trim()) errors.push("Provider name is required.");
  if (provider?.avatar && !isValidImageUrl(provider.avatar)) {
    errors.push("Avatar URL is invalid.");
  }

  const minGuests = Number(guestRequirements?.minGuests ?? 1);
  const maxGuests = Number(guestRequirements?.maxGuests);
  if (!isPositiveNumber(guestRequirements?.maxGuests)) {
    errors.push("Maximum guests must be a positive number.");
  } else if (minGuests > maxGuests) {
    errors.push("Minimum guests cannot exceed maximum guests.");
  }

  if (!Array.isArray(subServices) || subServices.length === 0) {
    errors.push("At least one sub service is required.");
  } else {
    const invalidSub = subServices.find(
      (sub) =>
        !sub.title?.trim() ||
        !isValidImageUrl(sub.image) ||
        !sub.description?.trim() ||
        !isPositiveNumber(sub.price) ||
        !sub.duration?.trim()
    );
    if (invalidSub) {
      errors.push(
        "Every sub service needs a title, valid image URL, description, price, and duration."
      );
    }
  }

  return errors;
}

module.exports = { validateServicePayload };