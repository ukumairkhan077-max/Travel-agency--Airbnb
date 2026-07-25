import "./FilterBar.css";

function FilterBar({
  mode = "homes", // "homes" | "services"
  filters,
  onChange,
  priceBounds,
  amenitiesList = [],
}) {
  function update(field, value) {
    onChange({ ...filters, [field]: value });
  }

  function toggleAmenity(amenity) {
    const exists = filters.amenities.includes(amenity);
    const nextAmenities = exists
      ? filters.amenities.filter((item) => item !== amenity)
      : [...filters.amenities, amenity];
    update("amenities", nextAmenities);
  }

  function handleReset() {
    onChange({
      minPrice: priceBounds.min,
      maxPrice: priceBounds.max,
      amenities: [],
      guests: 1,
    });
  }

  return (
    <aside className="filter-bar">
      <div className="filter-bar-header">
        <h3>Filters</h3>
        <button type="button" className="filter-bar-reset" onClick={handleReset}>
          Clear all
        </button>
      </div>

      <div className="filter-bar-section">
        <h4>Price range ({mode === "homes" ? "Rs./night" : "USD"})</h4>

        <div className="filter-bar-price-row">
          <div className="filter-bar-price-field">
            <label>Min</label>
            <input
              type="number"
              min={priceBounds.min}
              max={filters.maxPrice}
              value={filters.minPrice}
              onChange={(e) => update("minPrice", Number(e.target.value))}
            />
          </div>
          <span className="filter-bar-price-dash">—</span>
          <div className="filter-bar-price-field">
            <label>Max</label>
            <input
              type="number"
              min={filters.minPrice}
              max={priceBounds.max}
              value={filters.maxPrice}
              onChange={(e) => update("maxPrice", Number(e.target.value))}
            />
          </div>
        </div>

        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          value={filters.maxPrice}
          onChange={(e) => update("maxPrice", Number(e.target.value))}
          className="filter-bar-range"
        />
      </div>

      <div className="filter-bar-section">
        <h4>Guests</h4>
        <input
          type="number"
          min={1}
          max={16}
          value={filters.guests}
          onChange={(e) =>
            update("guests", Math.max(1, Number(e.target.value) || 1))
          }
          className="filter-bar-guests-input"
        />
      </div>

      {mode === "homes" && amenitiesList.length > 0 && (
        <div className="filter-bar-section">
          <h4>Amenities</h4>

          <div className="filter-bar-amenities-list">
            {amenitiesList.map((amenity) => (
              <label className="filter-bar-checkbox" key={amenity}>
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

export default FilterBar;
