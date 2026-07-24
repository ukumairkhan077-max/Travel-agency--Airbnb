import { Link } from "react-router-dom";
import {
  MdHome,
  MdSpa,
  MdEventNote,
  MdAttachMoney,
} from "react-icons/md";
import HostPageLayout from "../../components/Host/HostPageLayout";
import { useApp } from "../../context/AppContext";
import "./HostDashboard.css";

function formatMoney(amount) {
  return `Rs. ${Math.round(amount || 0).toLocaleString()}`;
}

function HostDashboard() {
  const { myHomes, myServices, bookings, currentHost } = useApp();

  const myHomeIds = myHomes.map((home) => home.id);
  const myBookings = bookings.filter((booking) =>
    myHomeIds.includes(booking.homeId)
  );

  const revenue = myBookings.reduce(
    (sum, booking) => sum + (booking.total || 0),
    0
  );

  const stats = [
    {
      label: "Total Homes",
      value: myHomes.length,
      icon: <MdHome />,
      link: "/host/my-homes",
    },
    {
      label: "Total Services",
      value: myServices.length,
      icon: <MdSpa />,
      link: "/host/my-services",
    },
    {
      label: "Bookings",
      value: myBookings.length,
      icon: <MdEventNote />,
      link: "/host/bookings",
    },
    {
      label: "Revenue",
      value: formatMoney(revenue),
      icon: <MdAttachMoney />,
      link: "/host/bookings",
    },
  ];

  const recentActivity = [
    ...myHomes.map((home) => ({
      key: `home-${home.id}`,
      text: `You listed the home "${home.title}"`,
      date: home.createdAt,
    })),
    ...myServices.map((service) => ({
      key: `service-${service.id}`,
      text: `You published the service "${service.title}"`,
      date: service.createdAt,
    })),
    ...myBookings.map((booking) => ({
      key: `booking-${booking.id}`,
      text: `New booking for "${booking.homeTitle}"`,
      date: booking.createdAt,
    })),
  ]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 6);

  return (
    <HostPageLayout
      title={`Welcome back, ${currentHost?.fullName?.split(" ")[0] || "Host"}`}
      subtitle="Here's what's happening with your listings."
    >
      <div className="host-dashboard-stats">
        {stats.map((stat) => (
          <Link to={stat.link} className="host-dashboard-stat-card" key={stat.label}>
            <div className="host-dashboard-stat-icon">{stat.icon}</div>
            <div>
              <p className="host-dashboard-stat-value">{stat.value}</p>
              <p className="host-dashboard-stat-label">{stat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="host-dashboard-actions">
        <Link to="/host/create-home" className="host-dashboard-action-btn">
          + Create Home
        </Link>
        <Link
          to="/host/create-service"
          className="host-dashboard-action-btn host-dashboard-action-btn-secondary"
        >
          + Create Service
        </Link>
      </div>

      <section className="host-dashboard-activity">
        <h2>Recent activity</h2>

        {recentActivity.length === 0 ? (
          <p className="host-dashboard-empty">
            No activity yet — create your first home or service to get
            started.
          </p>
        ) : (
          <ul className="host-dashboard-activity-list">
            {recentActivity.map((item) => (
              <li key={item.key}>
                <span>{item.text}</span>
                {item.date && (
                  <span className="host-dashboard-activity-date">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </HostPageLayout>
  );
}

export default HostDashboard;