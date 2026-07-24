import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { isValidImageUrl, isPositiveNumber } from "../../utils/validators";
import "./ServiceForm.css";

const CATEGORIES = [
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

const PRICE_UNITS = ["guest", "group", "session", "hour"];
const CURRENCIES = ["USD", "PKR"];

function emptySubService() {
  return {
    title: "",
    image: "",
    description: "",
    price: "",
    priceUnit: "guest",
    duration: "",
  };
}

function buildInitialForm(initialValues) {
  if (!initialValues) {
    return {
      title: "",
      category: CATEGORIES[0],
      tagline: "",
      priceFrom: "",
      currency: "USD",
      priceUnit: "guest",
      minimumToBook: "",
      heroImage: "",
      city: "",
      area: "",
      country: "Pakistan",
      postcode: "",
      providedAt: "",
      providerName: "",
      avatar: "",
      providerTitle: "",
      experienceYears: "",
      experienceSummary: "",
      careerHighlight: "",
      education: "",
      cancellationPolicy: "Free cancellation · Up to 1 day before start time",
      minAge: "",
      minGuests: "1",
      maxGuests: "",
      subServices: [emptySubService()],
    };
  }

  return {
    title: initialValues.title || "",
    category: initialValues.category || CATEGORIES[0],
    tagline: initialValues.tagline || "",
    priceFrom: initialValues.priceFrom ?? "",
    currency: initialValues.currency || "USD",
    priceUnit: initialValues.priceUnit || "guest",
    minimumToBook: initialValues.minimumToBook ?? "",
    heroImage: initialValues.heroImage || "",
    city: initialValues.location?.city || "",
    area: initialValues.location?.area || "",
    country: initialValues.location?.country || "Pakistan",
    postcode: initialValues.location?.postcode || "",
    providedAt: initialValues.location?.providedAt || "",
    providerName: initialValues.provider?.name || "",
    avatar: initialValues.provider?.avatar || "",
    providerTitle: initialValues.provider?.title || "",
    experienceYears: initialValues.provider?.experienceYears ?? "",
    experienceSummary: initialValues.provider?.experienceSummary || "",
    careerHighlight: initialValues.provider?.careerHighlight || "",
    education: initialValues.provider?.education || "",
    cancellationPolicy: initialValues.cancellationPolicy || "",
    minAge: initialValues.guestRequirements?.minAge ?? "",
    minGuests: initialValues.guestRequirements?.minGuests ?? "1",
    maxGuests: initialValues.guestRequirements?.maxGuests ?? "",
    subServices: initialValues.subServices?.length
      ? initialValues.subServices.map((sub) => ({ ...sub }))
      : [emptySubService()],
  };
}

function ServiceForm({ initialValues, onSubmit, submitLabel = "Publish Service" }) {
  const [form, setForm] = useState(() => buildInitialForm(initialValues));
  const [errors, setErrors] = useState({});

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function updateSubService(index, field, value) {
    setForm((prev) => {
      const subServices = [...prev.subServices];
      subServices[index] = { ...subServices[index], [field]: value };
      return { ...prev, subServices };
    });
  }

  function addSubService() {
    setForm((prev) => ({
      ...prev,
      subServices: [...prev.subServices, emptySubService()],
    }));
  }

  function removeSubService(index) {
    setForm((prev) => ({
      ...prev,
      subServices: prev.subServices.filter((_, i) => i !== index),
    }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.title.trim()) nextErrors.title = "Title is required.";
    if (!form.tagline.trim()) nextErrors.tagline = "Tagline is required.";
    if (!isPositiveNumber(form.priceFrom))
      nextErrors.priceFrom = "Price From must be a positive number.";
    if (!isValidImageUrl(form.heroImage))
      nextErrors.heroImage = "Enter a valid hero image URL.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.area.trim()) nextErrors.area = "Area is required.";
    if (!form.country.trim()) nextErrors.country = "Country is required.";
    if (!form.providerName.trim())
      nextErrors.providerName = "Provider name is required.";
    if (form.avatar && !isValidImageUrl(form.avatar))
      nextErrors.avatar = "Avatar URL is invalid.";

    const minGuests = Number(form.minGuests);
    const maxGuests = Number(form.maxGuests);
    if (!isPositiveNumber(form.maxGuests)) {
      nextErrors.maxGuests = "Maximum guests must be a positive number.";
    } else if (minGuests > maxGuests) {
      nextErrors.minGuests = "Minimum guests cannot exceed maximum guests.";
    }

    const cleanedSubServices = form.subServices.filter(
      (sub) => sub.title.trim() || sub.image.trim() || sub.description.trim()
    );

    if (cleanedSubServices.length === 0) {
      nextErrors.subServices = "Add at least one sub service.";
    } else {
      const invalidSub = cleanedSubServices.find(
        (sub) =>
          !sub.title.trim() ||
          !isValidImageUrl(sub.image) ||
          !sub.description.trim() ||
          !isPositiveNumber(sub.price) ||
          !sub.duration.trim()
      );
      if (invalidSub) {
        nextErrors.subServices =
          "Every sub service needs a title, valid image URL, description, price, and duration.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const cleanedSubServices = form.subServices
      .filter((sub) => sub.title.trim())
      .map((sub, index) => ({
        id: sub.id || `${form.title.toLowerCase().replace(/\s+/g, "-")}-sub-${index}`,
        title: sub.title.trim(),
        image: sub.image.trim(),
        description: sub.description.trim(),
        price: Number(sub.price),
        priceUnit: sub.priceUnit,
        duration: sub.duration.trim(),
      }));

    onSubmit({
      title: form.title.trim(),
      category: form.category,
      tagline: form.tagline.trim(),
      heroImage: form.heroImage.trim(),
      priceFrom: Number(form.priceFrom),
      currency: form.currency,
      priceUnit: form.priceUnit,
      minimumToBook: form.minimumToBook ? Number(form.minimumToBook) : null,
      location: {
        city: form.city.trim(),
        area: form.area.trim(),
        country: form.country.trim(),
        postcode: form.postcode.trim(),
        providedAt: form.providedAt.trim(),
      },
      provider: {
        id: `host-${form.providerName.trim().toLowerCase().replace(/\s+/g, "-")}`,
        name: form.providerName.trim(),
        avatar: form.avatar.trim(),
        title: form.providerTitle.trim(),
        experienceYears: Number(form.experienceYears) || 0,
        experienceSummary: form.experienceSummary.trim(),
        careerHighlight: form.careerHighlight.trim(),
        education: form.education.trim(),
      },
      cancellationPolicy: form.cancellationPolicy.trim(),
      guestRequirements: {
        minAge: Number(form.minAge) || 0,
        minGuests: Number(form.minGuests) || 1,
        maxGuests: Number(form.maxGuests),
      },
      subServices: cleanedSubServices,
    });
  }

  return (
    <form className="service-form" onSubmit={handleSubmit} noValidate>
      <section className="service-form-section">
        <h2>Basic Information</h2>

        <div className="service-form-field">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
          />
          {errors.title && <p className="service-form-error">{errors.title}</p>}
        </div>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="service-form-field">
            <label>Hero Image URL</label>
            <input
              type="text"
              value={form.heroImage}
              onChange={(e) => update("heroImage", e.target.value)}
              placeholder="https://images.unsplash.com/..."
            />
            {errors.heroImage && (
              <p className="service-form-error">{errors.heroImage}</p>
            )}
          </div>
        </div>

        <div className="service-form-field">
          <label>Tagline</label>
          <textarea
            rows={3}
            value={form.tagline}
            onChange={(e) => update("tagline", e.target.value)}
          />
          {errors.tagline && (
            <p className="service-form-error">{errors.tagline}</p>
          )}
        </div>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Price From</label>
            <input
              type="number"
              min="0"
              value={form.priceFrom}
              onChange={(e) => update("priceFrom", e.target.value)}
            />
            {errors.priceFrom && (
              <p className="service-form-error">{errors.priceFrom}</p>
            )}
          </div>

          <div className="service-form-field">
            <label>Currency</label>
            <select
              value={form.currency}
              onChange={(e) => update("currency", e.target.value)}
            >
              {CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="service-form-field">
            <label>Price Unit</label>
            <select
              value={form.priceUnit}
              onChange={(e) => update("priceUnit", e.target.value)}
            >
              {PRICE_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="service-form-field">
          <label>Minimum Booking (optional)</label>
          <input
            type="number"
            min="0"
            value={form.minimumToBook}
            onChange={(e) => update("minimumToBook", e.target.value)}
          />
        </div>
      </section>

      <section className="service-form-section">
        <h2>Location</h2>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>City</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="e.g. Lahore"
            />
            {errors.city && <p className="service-form-error">{errors.city}</p>}
          </div>

          <div className="service-form-field">
            <label>Area</label>
            <input
              type="text"
              value={form.area}
              onChange={(e) => update("area", e.target.value)}
            />
            {errors.area && <p className="service-form-error">{errors.area}</p>}
          </div>
        </div>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Country</label>
            <input
              type="text"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            />
            {errors.country && (
              <p className="service-form-error">{errors.country}</p>
            )}
          </div>

          <div className="service-form-field">
            <label>Postcode</label>
            <input
              type="text"
              value={form.postcode}
              onChange={(e) => update("postcode", e.target.value)}
            />
          </div>
        </div>

        <div className="service-form-field">
          <label>Provided At</label>
          <input
            type="text"
            value={form.providedAt}
            onChange={(e) => update("providedAt", e.target.value)}
            placeholder="e.g. Client's home or studio"
          />
        </div>
      </section>

      <section className="service-form-section">
        <h2>Provider Information</h2>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Provider Name</label>
            <input
              type="text"
              value={form.providerName}
              onChange={(e) => update("providerName", e.target.value)}
            />
            {errors.providerName && (
              <p className="service-form-error">{errors.providerName}</p>
            )}
          </div>

          <div className="service-form-field">
            <label>Avatar URL</label>
            <input
              type="text"
              value={form.avatar}
              onChange={(e) => update("avatar", e.target.value)}
            />
            {errors.avatar && (
              <p className="service-form-error">{errors.avatar}</p>
            )}
          </div>
        </div>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Title</label>
            <input
              type="text"
              value={form.providerTitle}
              onChange={(e) => update("providerTitle", e.target.value)}
              placeholder="e.g. Personal trainer in Gulberg, Lahore"
            />
          </div>

          <div className="service-form-field">
            <label>Years Experience</label>
            <input
              type="number"
              min="0"
              value={form.experienceYears}
              onChange={(e) => update("experienceYears", e.target.value)}
            />
          </div>
        </div>

        <div className="service-form-field">
          <label>Experience Summary</label>
          <textarea
            rows={2}
            value={form.experienceSummary}
            onChange={(e) => update("experienceSummary", e.target.value)}
          />
        </div>

        <div className="service-form-field">
          <label>Career Highlight</label>
          <textarea
            rows={2}
            value={form.careerHighlight}
            onChange={(e) => update("careerHighlight", e.target.value)}
          />
        </div>

        <div className="service-form-field">
          <label>Education</label>
          <textarea
            rows={2}
            value={form.education}
            onChange={(e) => update("education", e.target.value)}
          />
        </div>
      </section>

      <section className="service-form-section">
        <h2>Cancellation Policy</h2>

        <div className="service-form-field">
          <input
            type="text"
            value={form.cancellationPolicy}
            onChange={(e) => update("cancellationPolicy", e.target.value)}
          />
        </div>
      </section>

      <section className="service-form-section">
        <h2>Guest Requirements</h2>

        <div className="service-form-row">
          <div className="service-form-field">
            <label>Minimum Age</label>
            <input
              type="number"
              min="0"
              value={form.minAge}
              onChange={(e) => update("minAge", e.target.value)}
            />
          </div>

          <div className="service-form-field">
            <label>Minimum Guests</label>
            <input
              type="number"
              min="1"
              value={form.minGuests}
              onChange={(e) => update("minGuests", e.target.value)}
            />
            {errors.minGuests && (
              <p className="service-form-error">{errors.minGuests}</p>
            )}
          </div>

          <div className="service-form-field">
            <label>Maximum Guests</label>
            <input
              type="number"
              min="1"
              value={form.maxGuests}
              onChange={(e) => update("maxGuests", e.target.value)}
            />
            {errors.maxGuests && (
              <p className="service-form-error">{errors.maxGuests}</p>
            )}
          </div>
        </div>
      </section>

      <section className="service-form-section">
        <h2>Sub Services</h2>

        {form.subServices.map((sub, index) => (
          <div className="service-form-subservice" key={index}>
            <div className="service-form-subservice-header">
              <h3>Sub Service {index + 1}</h3>
              {form.subServices.length > 1 && (
                <button
                  type="button"
                  className="service-form-remove-btn"
                  onClick={() => removeSubService(index)}
                >
                  <FaTrash /> Remove
                </button>
              )}
            </div>

            <div className="service-form-row">
              <div className="service-form-field">
                <label>Title</label>
                <input
                  type="text"
                  value={sub.title}
                  onChange={(e) =>
                    updateSubService(index, "title", e.target.value)
                  }
                />
              </div>

              <div className="service-form-field">
                <label>Image URL</label>
                <input
                  type="text"
                  value={sub.image}
                  onChange={(e) =>
                    updateSubService(index, "image", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="service-form-field">
              <label>Description</label>
              <textarea
                rows={2}
                value={sub.description}
                onChange={(e) =>
                  updateSubService(index, "description", e.target.value)
                }
              />
            </div>

            <div className="service-form-row">
              <div className="service-form-field">
                <label>Price</label>
                <input
                  type="number"
                  min="0"
                  value={sub.price}
                  onChange={(e) =>
                    updateSubService(index, "price", e.target.value)
                  }
                />
              </div>

              <div className="service-form-field">
                <label>Price Unit</label>
                <select
                  value={sub.priceUnit}
                  onChange={(e) =>
                    updateSubService(index, "priceUnit", e.target.value)
                  }
                >
                  {PRICE_UNITS.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              <div className="service-form-field">
                <label>Duration</label>
                <input
                  type="text"
                  value={sub.duration}
                  onChange={(e) =>
                    updateSubService(index, "duration", e.target.value)
                  }
                  placeholder="e.g. 1 hr"
                />
              </div>
            </div>
          </div>
        ))}

        {errors.subServices && (
          <p className="service-form-error">{errors.subServices}</p>
        )}

        <button
          type="button"
          className="service-form-add-btn"
          onClick={addSubService}
        >
          <FaPlus /> Add Sub Service
        </button>
      </section>

      <button type="submit" className="service-form-submit-btn">
        {submitLabel}
      </button>
    </form>
  );
}

export default ServiceForm;