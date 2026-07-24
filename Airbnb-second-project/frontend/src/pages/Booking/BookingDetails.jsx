import { useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBack, IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { useApp } from "../../context/AppContext";
import "../ConfirmPay/ConfirmPay.css";
import "../../components/ConfirmPay/BookingSummary.css";
import "./BookingFlow.css";

function BookingDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { homes } = useApp();

  const listing = homes.find((item) => item.id === Number(id));

  const passedState = location.state || {};
  const [checkIn, setCheckIn] = useState(passedState.checkIn || "");
  const [checkOut, setCheckOut] = useState(passedState.checkOut || "");
  const [guests, setGuests] = useState(passedState.guests || 1);
  const [error, setError] = useState("");

  if (!listing) {
    return (
      <div className="booking-flow-not-found">
        <h2>Listing not found</h2>
        <Link to="/listings">Back to listings</Link>
      </div>
    );
  }

  function handleContinue() {
    if (!checkIn || !checkOut) {
      setError("Please choose both a check-in and check-out date.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError("Check-out date must be after the check-in date.");
      return;
    }

    setError("");

    navigate(`/booking/${listing.id}/question`, {
      state: { checkIn, checkOut, guests },
    });
  }

  return (
    <div className="booking-flow-page">
      <header className="booking-flow-header">
        <Link to="/" className="booking-flow-logo">
          airbnb
        </Link>
      </header>

      <div className="booking-flow-container">
        <button
          type="button"
          className="booking-flow-back-btn"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
          Back
        </button>

        <h1 className="booking-flow-heading">Booking details</h1>
        <p className="booking-flow-subheading">
          Confirm your trip details before adding an optional service.
        </p>

        <div className="booking-flow-grid">
          <div className="booking-flow-left">
            <section className="cp-section">
              <h2 className="cp-section-title">Your trip</h2>

              <div className="cp-field-row">
                <div className="cp-field">
                  <label>
                    <IoCalendarOutline /> Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>

                <div className="cp-field">
                  <label>
                    <IoCalendarOutline /> Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              <div className="cp-field booking-flow-guests-field">
                <label>
                  <IoPeopleOutline /> Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={16}
                  value={guests}
                  onChange={(e) =>
                    setGuests(Math.max(1, Number(e.target.value) || 1))
                  }
                />
              </div>

              {error && <p className="booking-flow-error">{error}</p>}
            </section>

            <button
              type="button"
              className="booking-flow-continue-btn"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>

          <aside className="booking-flow-right">
            <div className="booking-summary">
              <div className="booking-summary-property">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="booking-summary-image"
                />

                <div className="booking-summary-property-info">
                  <p className="booking-summary-title">{listing.title}</p>
                  <p className="booking-summary-row-value">
                    {listing.city} · Rs. {listing.price.toLocaleString()} / night
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;