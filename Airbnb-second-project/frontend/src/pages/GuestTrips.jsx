import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";
import "./GuestTrips.css";

function formatMoney(amount) {
  return `Rs. ${Math.round(amount || 0).toLocaleString()}`;
}

function GuestTrips() {
  const { bookings } = useApp();
  const { guestUser } = useAuth();

  const myTrips = bookings.filter(
    (booking) => booking.guestId === guestUser.id
  );

  return (
    <>
      <Navbar variant="full" />

      <div className="guest-trips-page">
        <h1>My Trips</h1>

        {myTrips.length === 0 ? (
          <div className="guest-trips-empty">
            <p>You don't have any trips booked yet.</p>
            <Link to="/listings" className="guest-trips-empty-btn">
              Start exploring homes
            </Link>
          </div>
        ) : (
          <div className="guest-trips-list">
            {myTrips.map((trip) => (
              <div className="guest-trips-card" key={trip.id}>
                <div className="guest-trips-card-body">
                  <h3>{trip.homeTitle}</h3>
                  <p className="guest-trips-dates">
                    {trip.checkIn} → {trip.checkOut} · {trip.guests} guest
                    {trip.guests > 1 ? "s" : ""}
                  </p>
                  {trip.serviceTitle && (
                    <p className="guest-trips-service">
                      + {trip.serviceTitle}
                    </p>
                  )}
                  <p className="guest-trips-total">
                    {formatMoney(trip.total)}
                  </p>
                </div>

                <Link
                  to={`/booking/view/${trip.id}`}
                  className="guest-trips-view-btn"
                >
                  View Booking
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default GuestTrips;
