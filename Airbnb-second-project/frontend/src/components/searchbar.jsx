import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaMapMarkerAlt, FaMinus, FaPlus } from "react-icons/fa";
import { cities, serviceCategories } from "../data/searchConfig";

function SearchBar({ type = "stays", compact = false, onSearch }) {
  const [openField, setOpenField] = useState(null);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0 });
  const [category, setCategory] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenField(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleField = (field) => {
    setOpenField((prev) => (prev === field ? null : field));
  };

  const totalGuests = guests.adults + guests.children;

  const whereLabel = location || "Search destinations";
  const whenLabel =
    checkIn && checkOut
      ? `${checkIn} - ${checkOut}`
      : checkIn
      ? checkIn
      : "Add dates";
  const whoLabel =
    type === "services"
      ? category || "Any service"
      : totalGuests > 0
      ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
      : "Add guests";

  const filteredCities = cities.filter((c) =>
    c.name.toLowerCase().includes(locationQuery.toLowerCase())
  );

  function updateGuest(key, delta) {
    setGuests((prev) => {
      const next = Math.max(0, prev[key] + delta);
      return { ...prev, [key]: next };
    });
  }

  function handleSearchClick() {
    setOpenField(null);
    if (onSearch) {
      onSearch({
        location,
        checkIn,
        checkOut,
        guests,
        category: type === "services" ? category : null,
      });
    }
  }

  return (
    <div
      className={`search-container ${compact ? "search-container-compact" : ""}`}
      ref={wrapRef}
    >
      <div className={`search-box ${compact ? "search-box-compact" : ""}`}>
        <div
          className={`search-item ${openField === "where" ? "search-item-active" : ""}`}
          onClick={() => toggleField("where")}
        >
          <h5>Where</h5>
          <p>{whereLabel}</p>

          {openField === "where" && (
            <div
              className="search-dropdown search-dropdown-where"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                className="search-dropdown-input"
                placeholder="Search destinations"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                autoFocus
              />
              <div className="search-dropdown-list">
                {location && (
                  <button
                    type="button"
                    className="search-dropdown-option search-dropdown-option-simple"
                    onClick={() => {
                      setLocation("");
                      setLocationQuery("");
                      setOpenField(null);
                    }}
                  >
                    Anywhere
                  </button>
                )}
                {filteredCities.length === 0 && (
                  <p className="search-dropdown-empty">No matching city</p>
                )}
                {filteredCities.map((c) => (
                  <button
                    type="button"
                    key={c.name}
                    className="search-dropdown-option"
                    onClick={() => {
                      setLocation(c.name);
                      setLocationQuery("");
                      setOpenField(null);
                    }}
                  >
                    <FaMapMarkerAlt className="search-dropdown-icon" />
                    <span>
                      <strong>{c.name}</strong>
                      <small>{c.subtitle}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="divider"></div>

        <div
          className={`search-item ${openField === "when" ? "search-item-active" : ""}`}
          onClick={() => toggleField("when")}
        >
          <h5>When</h5>
          <p>{whenLabel}</p>

          {openField === "when" && (
            <div
              className="search-dropdown search-dropdown-when"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="search-date-row">
                <div className="search-date-field">
                  <label>Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="search-date-field">
                  <label>Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="divider"></div>

        <div
          className={`search-item ${openField === "who" ? "search-item-active" : ""}`}
          onClick={() => toggleField("who")}
        >
          <h5>{type === "services" ? "Service" : "Who"}</h5>
          <p>{whoLabel}</p>

          {openField === "who" &&
            (type === "services" ? (
              <div
                className="search-dropdown search-dropdown-category"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="search-dropdown-list">
                  <button
                    type="button"
                    className="search-dropdown-option search-dropdown-option-simple"
                    onClick={() => {
                      setCategory("");
                      setOpenField(null);
                    }}
                  >
                    Any service
                  </button>
                  {serviceCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      className="search-dropdown-option search-dropdown-option-simple"
                      onClick={() => {
                        setCategory(cat);
                        setOpenField(null);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="search-dropdown search-dropdown-guests"
                onClick={(e) => e.stopPropagation()}
              >
                {[
                  { key: "adults", label: "Adults", sub: "Ages 13 or above" },
                  { key: "children", label: "Children", sub: "Ages 2-12" },
                  { key: "infants", label: "Infants", sub: "Under 2" },
                ].map((row) => (
                  <div className="search-guest-row" key={row.key}>
                    <div>
                      <p className="search-guest-label">{row.label}</p>
                      <p className="search-guest-sub">{row.sub}</p>
                    </div>
                    <div className="search-guest-controls">
                      <button
                        type="button"
                        className="search-guest-btn"
                        disabled={guests[row.key] === 0}
                        onClick={() => updateGuest(row.key, -1)}
                      >
                        <FaMinus />
                      </button>
                      <span>{guests[row.key]}</span>
                      <button
                        type="button"
                        className="search-guest-btn"
                        onClick={() => updateGuest(row.key, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <button className="search-btn" onClick={handleSearchClick} type="button">
          <IoSearch />
          {compact ? null : <span className="search-btn-label">Search</span>}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
