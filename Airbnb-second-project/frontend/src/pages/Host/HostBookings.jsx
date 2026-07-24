import HostPageLayout from "../../components/Host/HostPageLayout";
import { useApp } from "../../context/AppContext";
import "./HostBookings.css";

function formatMoney(amount) {
  return `Rs. ${Math.round(amount || 0).toLocaleString()}`;
}

function HostBookings() {
  const { myHomes, bookings } = useApp();

  const myHomeIds = myHomes.map((home) => home.id);
  const myBookings = bookings.filter((booking) =>
    myHomeIds.includes(booking.homeId)
  );

  return (
    <HostPageLayout
      title="Bookings"
      subtitle="Bookings made against the homes you've listed."
    >
      {myBookings.length === 0 ? (
        <p className="host-bookings-empty">No bookings yet.</p>
      ) : (
        <div className="host-bookings-table">
          <div className="host-bookings-row host-bookings-row-header">
            <span>Booking ID</span>
            <span>Home</span>
            <span>Dates</span>
            <span>Guests</span>
            <span>Service</span>
            <span>Total</span>
          </div>

          {myBookings.map((booking) => (
            <div className="host-bookings-row" key={booking.id}>
              <span>{booking.id}</span>
              <span>{booking.homeTitle}</span>
              <span>
                {booking.checkIn} → {booking.checkOut}
              </span>
              <span>{booking.guests}</span>
              <span>{booking.serviceTitle || "—"}</span>
              <span>{formatMoney(booking.total)}</span>
            </div>
          ))}
        </div>
      )}
    </HostPageLayout>
  );
}

export default HostBookings;