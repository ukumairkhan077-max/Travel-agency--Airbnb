import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PriceDetails from "./PriceDetails";
import "./BookingSummary.css";

function formatDate(dateString) {
  if (!dateString) return "Add date";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Add date";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BookingSummary({
  listing,
  reviewCount,
  checkIn,
  checkOut,
  guests,
  onDatesChange,
  onGuestsChange,
  priceDetails,
}) {
  const [editingDates, setEditingDates] = useState(false);
  const [editingGuests, setEditingGuests] = useState(false);

  const [draftCheckIn, setDraftCheckIn] = useState(checkIn);
  const [draftCheckOut, setDraftCheckOut] = useState(checkOut);
  const [draftGuests, setDraftGuests] = useState(guests);

  function saveDates() {
    onDatesChange(draftCheckIn, draftCheckOut);
    setEditingDates(false);
  }

  function saveGuests() {
    onGuestsChange(draftGuests);
    setEditingGuests(false);
  }

  return (
    <aside className="booking-summary">
      <div className="booking-summary-property">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="booking-summary-image"
        />

        <div className="booking-summary-property-info">
          <p className="booking-summary-title">{listing.title}</p>

          <div className="booking-summary-rating">
            <FaStar className="booking-summary-star" />
            <span>{listing.rating.toFixed(2)}</span>
            <span className="booking-summary-dot">·</span>
            <span className="booking-summary-reviews">
              {reviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      <div className="booking-summary-divider" />

      <div className="booking-summary-row">
        <div>
          <p className="booking-summary-row-label">Dates</p>
          {!editingDates ? (
            <p className="booking-summary-row-value">
              {formatDate(checkIn)} - {formatDate(checkOut)}
            </p>
          ) : (
            <div className="booking-summary-edit-dates">
              <div className="booking-summary-date-field">
                <label>Check-in</label>
                <input
                  type="date"
                  value={draftCheckIn || ""}
                  onChange={(e) => setDraftCheckIn(e.target.value)}
                />
              </div>
              <div className="booking-summary-date-field">
                <label>Check-out</label>
                <input
                  type="date"
                  value={draftCheckOut || ""}
                  onChange={(e) => setDraftCheckOut(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {!editingDates ? (
          <button
            type="button"
            className="booking-summary-change-btn"
            onClick={() => {
              setDraftCheckIn(checkIn);
              setDraftCheckOut(checkOut);
              setEditingDates(true);
            }}
          >
            Change
          </button>
        ) : (
          <button
            type="button"
            className="booking-summary-change-btn"
            onClick={saveDates}
          >
            Save
          </button>
        )}
      </div>

      <div className="booking-summary-row">
        <div>
          <p className="booking-summary-row-label">Guests</p>
          {!editingGuests ? (
            <p className="booking-summary-row-value">
              {guests} guest{guests > 1 ? "s" : ""}
            </p>
          ) : (
            <input
              type="number"
              min={1}
              max={16}
              className="booking-summary-guests-input"
              value={draftGuests}
              onChange={(e) =>
                setDraftGuests(Math.max(1, Number(e.target.value) || 1))
              }
            />
          )}
        </div>

        {!editingGuests ? (
          <button
            type="button"
            className="booking-summary-change-btn"
            onClick={() => {
              setDraftGuests(guests);
              setEditingGuests(true);
            }}
          >
            Change
          </button>
        ) : (
          <button
            type="button"
            className="booking-summary-change-btn"
            onClick={saveGuests}
          >
            Save
          </button>
        )}
      </div>

      <div className="booking-summary-divider" />

      <PriceDetails {...priceDetails} />
    </aside>
  );
}

export default BookingSummary;