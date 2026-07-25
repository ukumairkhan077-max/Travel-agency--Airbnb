// Approximate city-center coordinates for the cities used in this project.
// No geocoding API is used — each listing gets a small, deterministic offset
// from its city center (based on its id) so pins don't all stack on one spot.

export const CITY_COORDINATES = {
  Lahore: { lat: 31.5204, lng: 74.3587 },
  Islamabad: { lat: 33.6844, lng: 73.0479 },
  Rawalpindi: { lat: 33.5651, lng: 73.0169 },
  Karachi: { lat: 24.8607, lng: 67.0011 },
};

const DEFAULT_COORDINATES = { lat: 30.3753, lng: 69.3451 }; // Pakistan center

// Turns an id (number or string) into a small, stable jitter in both
// directions so the same listing always renders at the same spot.
function jitterFromId(id) {
  const str = String(id);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 100000;
  }
  const latJitter = ((hash % 200) - 100) / 4000; // +/- ~0.025 deg
  const lngJitter = (((hash * 7) % 200) - 100) / 4000;
  return { latJitter, lngJitter };
}

export function getCoordinatesFor(city, id) {
  const base = CITY_COORDINATES[city] || DEFAULT_COORDINATES;
  const { latJitter, lngJitter } = jitterFromId(id ?? city ?? "default");
  return {
    lat: base.lat + latJitter,
    lng: base.lng + lngJitter,
  };
}
