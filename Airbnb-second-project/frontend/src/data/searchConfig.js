// searchConfig.js
// Shared reference data for the SearchBar component so the "Where" and
// "Add service" dropdowns always match the cities/categories that actually
// exist in dummylisting.js and services.js.

export const cities = [
  { name: "Lahore", subtitle: "Punjab, Pakistan" },
  { name: "Islamabad", subtitle: "Capital Territory, Pakistan" },
  { name: "Rawalpindi", subtitle: "Punjab, Pakistan" },
  { name: "Karachi", subtitle: "Sindh, Pakistan" },
];

export const serviceCategories = [
  "Wellness",
  "Fitness",
  "Massage",
  "Photography",
  "Culinary",
  "Pilates",
  "Meditation",
  "Hair",
  "Makeup",
  "Nail Care",
  "Life Coaching",
  "Music",
  "Art",
  "Dance",
  "Styling",
  "Tarot & Astrology",
  "Language Tutoring",
  "Home Organizing",
  "Floristry",
];

// Amenities that actually appear across dummylisting.js, used for the
// Homes filter sidebar.
export const homeAmenities = [
  "Solar power",
  "Gas heater",
  "Free parking",
  "Air conditioning",
  "Kitchen",
  "Lawn/Garden",
  "Elevator",
  "Washer",
  "Prayer room (Mosalla)",
  "Balcony",
  "Study room",
  "Dining area",
  "Wifi",
  "CCTV",
  "Backup generator",
  "Servant quarter",
  "Geyser",
  "Rooftop access",
  "Security guard",
];

// Price bounds observed in dummylisting.js (PKR/night), used for the
// price range slider defaults.
export const homePriceBounds = { min: 5000, max: 45000 };
export const servicePriceBounds = { min: 0, max: 200 };
