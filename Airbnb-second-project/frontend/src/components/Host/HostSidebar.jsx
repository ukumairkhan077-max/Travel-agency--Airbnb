import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdAddHome,
  MdAddBusiness,
  MdHome,
  MdSpa,
  MdEventNote,
  MdPerson,
  MdLogout,
} from "react-icons/md";
import { useApp } from "../../context/AppContext";
import "./HostSidebar.css";

const NAV_ITEMS = [
  { to: "/host/dashboard", label: "Dashboard", icon: <MdDashboard /> },
  { to: "/host/create-home", label: "Create Home", icon: <MdAddHome /> },
  { to: "/host/create-service", label: "Create Service", icon: <MdAddBusiness /> },
  { to: "/host/my-homes", label: "My Homes", icon: <MdHome /> },
  { to: "/host/my-services", label: "My Services", icon: <MdSpa /> },
  { to: "/host/bookings", label: "Bookings", icon: <MdEventNote /> },
  { to: "/host/profile", label: "Profile", icon: <MdPerson /> },
];

function HostSidebar() {
  const navigate = useNavigate();
  const { currentHost, logoutHost } = useApp();

  function handleLogout() {
    logoutHost();
    navigate("/");
  }

  return (
    <aside className="host-sidebar">
      <div className="host-sidebar-profile">
        <div className="host-sidebar-avatar">
          {(currentHost?.fullName || "H").charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="host-sidebar-name">
            {currentHost?.fullName || "Host"}
          </p>
          <p className="host-sidebar-email">{currentHost?.email || ""}</p>
        </div>
      </div>

      <nav className="host-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "host-sidebar-link" + (isActive ? " host-sidebar-link-active" : "")
            }
          >
            <span className="host-sidebar-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}

        <button
          type="button"
          className="host-sidebar-link host-sidebar-logout"
          onClick={handleLogout}
        >
          <span className="host-sidebar-icon">
            <MdLogout />
          </span>
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default HostSidebar;