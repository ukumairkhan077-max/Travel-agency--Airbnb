import { useParams, useLocation, Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import "./BookingFlow.css";

function formatMoney(amount) {
  return `Rs. ${Math.round(amount || 0).toLocaleString()}`;
}

function ThankYou() {
  const { bookingId } = useParams();
  const location = useLocation();
  const { bookings } = useApp();

  const booking = bookings.find((item) => item.id === bookingId);
  const isViewMode = location.pathname.startsWith("/booking/view");

  if (!booking) {
    return (
      <div className="thank-you-page">
        <div className="thank-you-card">
          <h1 className="thank-you-title">Booking not found</h1>
          <p className="thank-you-subtitle">
            We couldn't find a booking with that ID.
          </p>
          <div className="thank-you-actions">
            <Link to="/" className="thank-you-btn thank-you-btn-primary">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="thank-you-page">
      <div className="thank-you-card">
        {!isViewMode && <div className="thank-you-icon">🎉</div>}

        <h1 className="thank-you-title">
          {isViewMode ? "Your booking" : "Booking confirmed!"}
        </h1>
        <p className="thank-you-subtitle">
          {isViewMode
            ? `Booking ID: ${booking.id}`
            : "A confirmation has been sent — here are your trip details."}
        </p>

        <div className="thank-you-details">
          <div className="thank-you-detail-row">
            <span className="thank-you-detail-label">House</span>
            <span className="thank-you-detail-value">{booking.homeTitle}</span>
          </div>

          <div className="thank-you-detail-row">
            <span className="thank-you-detail-label">Dates</span>
            <span className="thank-you-detail-value">
              {booking.checkIn} → {booking.checkOut}
            </span>
          </div>

          <div className="thank-you-detail-row">
            <span className="thank-you-detail-label">Guests</span>
            <span className="thank-you-detail-value">{booking.guests}</span>
          </div>

          {booking.serviceTitle && (
            <div className="thank-you-detail-row">
              <span className="thank-you-detail-label">Selected service</span>
              <span className="thank-you-detail-value">
                {booking.serviceTitle}
              </span>
            </div>
          )}

          <div className="thank-you-detail-row">
            <span className="thank-you-detail-label">Booking ID</span>
            <span className="thank-you-detail-value">{booking.id}</span>
          </div>

          <div className="thank-you-detail-row">
            <span className="thank-you-detail-label">
              Estimated arrival
            </span>
            <span className="thank-you-detail-value">
              {booking.checkIn}, after 2:00 PM
            </span>
          </div>

          <div className="thank-you-detail-row thank-you-total-row">
            <span className="thank-you-detail-label">Total paid</span>
            <span className="thank-you-detail-value">
              {formatMoney(booking.total)}
            </span>
          </div>
        </div>

        <div className="thank-you-actions">
          <Link to="/" className="thank-you-btn thank-you-btn-secondary">
            Back Home
          </Link>

          {!isViewMode && (
            <Link
              to={`/booking/view/${booking.id}`}
              className="thank-you-btn thank-you-btn-primary"
            >
              View Booking
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThankYou;