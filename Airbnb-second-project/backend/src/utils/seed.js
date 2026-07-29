require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Home = require("../models/Home");
const Service = require("../models/Service");
const Host = require("../models/Host");

const dummyListings = require("../../seedData/dummylisting");
const services = require("../../seedData/services");

const SEED_HOST_EMAIL = "seed-host@example.com";

// The frontend's `location` field is a combined display string, e.g.
// "F-6, Islamabad, Pakistan" — split it back into area/city/country
// since the Home model stores those separately.
function splitLocation(locationString) {
  const parts = locationString.split(",").map((part) => part.trim());
  return {
    area: parts[0] || "",
    country: parts[2] || "Pakistan",
  };
}

async function getOrCreateSeedHost() {
  let host = await Host.findOne({ email: SEED_HOST_EMAIL });

  if (!host) {
    host = await Host.create({
      fullName: "Seed Data Host",
      email: SEED_HOST_EMAIL,
      password: "seed-placeholder-123", // never a real login; just satisfies the schema
      phone: "03001234567",
      cnic: "00000-0000000-0",
      city: "Islamabad",
      address: "Seed data placeholder address",
    });
    console.log("Created placeholder seed host.");
  } else {
    console.log("Using existing placeholder seed host.");
  }

  return host;
}

function transformHome(listing, hostId) {
  const { area, country } = splitLocation(listing.location);

  return {
    title: listing.title,
    description: listing.description,
    country,
    city: listing.city,
    area,
    fullAddress: listing.location, // best available proxy — no separate street address in the seed data
    location: listing.location,
    googleMapUrl: "",
    price: listing.price,
    currency: listing.currency || "PKR",
    maxGuests: listing.maxGuests || 4,
    host: listing.host,
    hostId,
    images: listing.images,
    amenities: listing.amenities,
    rating: listing.rating || 0,
  };
}

function transformService(service, hostId) {
  return {
    title: service.title,
    category: service.category,
    tagline: service.tagline,
    heroImage: service.heroImage,
    priceFrom: service.priceFrom,
    currency: service.currency || "USD",
    priceUnit: service.priceUnit || "guest",
    minimumToBook: service.minimumToBook || null,
    location: {
      city: service.location.city,
      area: service.location.area,
      country: service.location.country || "Pakistan",
      postcode: service.location.postcode || "",
      providedAt: service.location.providedAt || "",
    },
    provider: {
      name: service.provider.name,
      avatar: service.provider.avatar || "",
      title: service.provider.title || "",
      experienceYears: service.provider.experienceYears || 0,
      experienceSummary: service.provider.experienceSummary || "",
      careerHighlight: service.provider.careerHighlight || "",
      education: service.provider.education || "",
    },
    cancellationPolicy: service.cancellationPolicy || "",
    guestRequirements: {
      minAge: service.guestRequirements?.minAge || 0,
      minGuests: service.guestRequirements?.minGuests || 1,
      maxGuests: service.guestRequirements?.maxGuests || 99,
    },
    subServices: service.subServices.map((sub) => ({
      title: sub.title,
      image: sub.image,
      description: sub.description,
      price: sub.price,
      priceUnit: sub.priceUnit || "guest",
      duration: sub.duration,
    })),
    hostId,
    rating: service.rating || 0,
    // Reuses the dummy data's review count as a starting number, but does
    // NOT create fake Review documents — those would need real Guest
    // accounts as authors, which this seed data doesn't have.
    reviewCount: service.reviewCount || (service.reviews?.length ?? 0),
    badge: service.badge || null,
  };
}

async function seed() {
  await connectDB();

  const host = await getOrCreateSeedHost();

  const existingHomeCount = await Home.countDocuments({ hostId: host._id });
  const existingServiceCount = await Service.countDocuments({ hostId: host._id });

  if (existingHomeCount > 0 || existingServiceCount > 0) {
    console.log(
      `Seed data already present (${existingHomeCount} homes, ${existingServiceCount} services). ` +
        `Skipping to avoid duplicates. Delete them manually first if you want to re-seed.`
    );
    await mongoose.disconnect();
    return;
  }

  const homeDocs = dummyListings.map((listing) => transformHome(listing, host._id));
  const serviceDocs = services.map((service) => transformService(service, host._id));

  const insertedHomes = await Home.insertMany(homeDocs, { ordered: false });
  const insertedServices = await Service.insertMany(serviceDocs, { ordered: false });

  console.log(`Seeded ${insertedHomes.length} homes.`);
  console.log(`Seeded ${insertedServices.length} services.`);

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});