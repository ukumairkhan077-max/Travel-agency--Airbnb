import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { isValidImageUrl, isPositiveNumber } from "../../utils/validators";
import "./HomeForm.css";

const SUGGESTED_AMENITIES = [
  "Solar power",
  "Kitchen",
  "Parking",
  "Wifi",
  "Pool",
  "Gym",
  "Air Conditioning",
  "Generator",
  "Gas Heater",
  "Pets Allowed",
];

const CURRENCIES = ["PKR", "USD"];

function buildInitialForm(initialValues) {
  if (!initialValues) {
    return {
      title: "",
      description: "",
      country: "Pakistan",
      city: "",
      area: "",
      fullAddress: "",
      googleMapUrl: "",
      price: "",
      currency: "PKR",
      hostName: "",
      images: [""],
      amenities: [],
    };
  }

  return {
    title: initialValues.title || "",
    description: initialValues.description || "",
    country: initialValues.country || "Pakistan",
    city: initialValues.city || "",
    area: initialValues.area || "",
    fullAddress: initialValues.fullAddress || initialValues.location || "",
    googleMapUrl: initialValues.googleMapUrl || "",
    price: initialValues.price ?? "",
    currency: initialValues.currency || "PKR",
    hostName: initialValues.host || "",
    images: initialValues.images?.length ? initialValues.images : [""],
    amenities: initialValues.amenities || [],
  };
}

function HomeForm({ initialValues, onSubmit, submitLabel = "Publish Home" }) {
  const [form, setForm] = useState(() => buildInitialForm(initialValues));
  const [customAmenity, setCustomAmenity] = useState("");
  const [errors, setErrors] = useState({});

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function updateImage(index, value) {
    setForm((prev) => {
      const images = [...prev.images];
      images[index] = value;
      return { ...prev, images };
    });
  }

  function addImageField() {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  }

  function removeImageField(index) {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }

  function toggleAmenity(amenity) {
    setForm((prev) => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((item) => item !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  }

  function addCustomAmenity() {
    const value = customAmenity.trim();
    if (!value || form.amenities.includes(value)) return;
    setForm((prev) => ({ ...prev, amenities: [...prev.amenities, value] }));
    setCustomAmenity("");
  }

  function removeAmenity(amenity) {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.filter((item) => item !== amenity),
    }));
  }

  function validate() {
    const nextErrors = {};
    const cleanedImages = form.images.map((img) => img.trim()).filter(Boolean);

    if (!form.title.trim()) nextErrors.title = "Title is required.";
    if (!form.description.trim())
      nextErrors.description = "Description is required.";
    if (!form.country.trim()) nextErrors.country = "Country is required.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.area.trim()) nextErrors.area = "Area is required.";
    if (!form.fullAddress.trim())
      nextErrors.fullAddress = "Full address is required.";
    if (!isPositiveNumber(form.price))
      nextErrors.price = "Price must be a positive number.";
    if (!form.hostName.trim()) nextErrors.hostName = "Host name is required.";

    if (cleanedImages.length === 0) {
      nextErrors.images = "Add at least one image URL.";
    } else if (cleanedImages.some((img) => !isValidImageUrl(img))) {
      nextErrors.images = "One or more image URLs are invalid.";
    }

    if (form.amenities.length === 0) {
      nextErrors.amenities = "Add at least one amenity.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const cleanedImages = form.images.map((img) => img.trim()).filter(Boolean);

    onSubmit({
      title: form.title.trim(),
      description: form.description.trim(),
      country: form.country.trim(),
      city: form.city.trim(),
      area: form.area.trim(),
      fullAddress: form.fullAddress.trim(),
      location: `${form.area.trim()}, ${form.city.trim()}, ${form.country.trim()}`,
      googleMapUrl: form.googleMapUrl.trim(),
      price: Number(form.price),
      currency: form.currency,
      host: form.hostName.trim(),
      images: cleanedImages,
      amenities: form.amenities,
    });
  }

  return (
    <form className="home-form" onSubmit={handleSubmit} noValidate>
      <section className="home-form-section">
        <h2>House Information</h2>

        <div className="home-form-field">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Independent House in F-6"
          />
          {errors.title && <p className="home-form-error">{errors.title}</p>}
        </div>

        <div className="home-form-field">
          <label>Description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Describe your home..."
          />
          {errors.description && (
            <p className="home-form-error">{errors.description}</p>
          )}
        </div>
      </section>

      <section className="home-form-section">
        <h2>Location</h2>

        <div className="home-form-row">
          <div className="home-form-field">
            <label>Country</label>
            <input
              type="text"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            />
            {errors.country && (
              <p className="home-form-error">{errors.country}</p>
            )}
          </div>

          <div className="home-form-field">
            <label>City</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="e.g. Islamabad"
            />
            {errors.city && <p className="home-form-error">{errors.city}</p>}
          </div>
        </div>

        <div className="home-form-row">
          <div className="home-form-field">
            <label>Area</label>
            <input
              type="text"
              value={form.area}
              onChange={(e) => update("area", e.target.value)}
              placeholder="e.g. F-6"
            />
            {errors.area && <p className="home-form-error">{errors.area}</p>}
          </div>

          <div className="home-form-field">
            <label>Full Address</label>
            <input
              type="text"
              value={form.fullAddress}
              onChange={(e) => update("fullAddress", e.target.value)}
            />
            {errors.fullAddress && (
              <p className="home-form-error">{errors.fullAddress}</p>
            )}
          </div>
        </div>

        <div className="home-form-field">
          <label>Google Map URL (optional)</label>
          <input
            type="text"
            value={form.googleMapUrl}
            onChange={(e) => update("googleMapUrl", e.target.value)}
            placeholder="https://maps.google.com/..."
          />
        </div>
      </section>

      <section className="home-form-section">
        <h2>Pricing</h2>

        <div className="home-form-row">
          <div className="home-form-field">
            <label>Price</label>
            <input
              type="number"
              min="0"
              value={form.price}
              onChange={(e) => update("price", e.target.value)}
              placeholder="27000"
            />
            {errors.price && <p className="home-form-error">{errors.price}</p>}
          </div>

          <div className="home-form-field">
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
        </div>
      </section>

      <section className="home-form-section">
        <h2>Host Information</h2>

        <div className="home-form-field">
          <label>Host Name</label>
          <input
            type="text"
            value={form.hostName}
            onChange={(e) => update("hostName", e.target.value)}
          />
          {errors.hostName && (
            <p className="home-form-error">{errors.hostName}</p>
          )}
        </div>
      </section>

      <section className="home-form-section">
        <h2>Images</h2>

        {form.images.map((image, index) => (
          <div className="home-form-dynamic-row" key={index}>
            <input
              type="text"
              value={image}
              onChange={(e) => updateImage(index, e.target.value)}
              placeholder="https://images.unsplash.com/..."
            />
            {form.images.length > 1 && (
              <button
                type="button"
                className="home-form-remove-btn"
                onClick={() => removeImageField(index)}
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}

        {errors.images && <p className="home-form-error">{errors.images}</p>}

        <button
          type="button"
          className="home-form-add-btn"
          onClick={addImageField}
        >
          <FaPlus /> Add Image
        </button>
      </section>

      <section className="home-form-section">
        <h2>Amenities</h2>

        <div className="home-form-chip-group">
          {SUGGESTED_AMENITIES.map((amenity) => (
            <button
              type="button"
              key={amenity}
              className={
                "home-form-chip" +
                (form.amenities.includes(amenity) ? " home-form-chip-active" : "")
              }
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </button>
          ))}
        </div>

        <div className="home-form-dynamic-row">
          <input
            type="text"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)}
            placeholder="Add a custom amenity"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addCustomAmenity();
              }
            }}
          />
          <button
            type="button"
            className="home-form-add-btn"
            onClick={addCustomAmenity}
          >
            <FaPlus /> Add
          </button>
        </div>

        {form.amenities.length > 0 && (
          <div className="home-form-selected-list">
            {form.amenities.map((amenity) => (
              <span className="home-form-selected-tag" key={amenity}>
                {amenity}
                <button type="button" onClick={() => removeAmenity(amenity)}>
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}

        {errors.amenities && (
          <p className="home-form-error">{errors.amenities}</p>
        )}
      </section>

      <button type="submit" className="home-form-submit-btn">
        {submitLabel}
      </button>
    </form>
  );
}

export default HomeForm;