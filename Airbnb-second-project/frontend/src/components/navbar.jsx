import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Airbnb-logo.png";
import { MdTravelExplore } from "react-icons/md";
import { FaHome, FaGift, FaHandshake, FaHeart, FaSuitcase, FaUser } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoGlobeOutline, IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import SearchBar from "./searchbar";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

/**
 * Navbar
 *
 * Props:
 *  - variant: "full" | "compact"
 *      "full"    -> logo + center nav tabs (Homes/Experiences/Services), used on
 *                   the Home page where a big SearchBar is rendered underneath.
 *      "compact" -> logo + a small pill SearchBar embedded in the middle of the
 *                   bar itself, used on inner pages (Services, Listings, etc.)
 *  - searchType: "stays" | "services" -> forwarded to the embedded SearchBar
 *  - onSearch: forwarded to the embedded SearchBar (compact variant only)
 */
function Navbar({ variant = "full", searchType = "stays", onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English (US)");
  const menuRef = useRef(null);
  const langRef = useRef(null);
  const navigate = useNavigate();
  const { currentHost, logoutHost } = useApp();
  const { guestUser, logout: logoutGuest } = useAuth();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogoutHost() {
    await logoutHost();
    setMenuOpen(false);
    navigate("/");
  }

  async function handleLogoutGuest() {
    await logoutGuest();
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Airbnb Logo" />
        </Link>

        {/* Middle: nav tabs (full) or compact search pill (compact) */}
        {variant === "full" ? (
          <div className="menu">
            <div className="menu-pill">
              <NavLink
                to="/listings"
                className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
              >
                <MdTravelExplore className="menu-icon" />
                <span>All</span>
              </NavLink>

              <NavLink
                to="/"
                end
                className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
              >
                <FaHome className="menu-icon" />
                <span>Homes</span>
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
              >
                <RiServiceFill className="menu-icon" />
                <span>Services</span>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="navbar-compact-search">
            <SearchBar type={searchType} compact onSearch={onSearch} />
          </div>
        )}

        {/* Right Side */}
        <div className="right-side" ref={menuRef}>
          <button
            className="host-btn"
            type="button"
            onClick={() =>
              navigate(currentHost ? "/host/dashboard" : "/become-host")
            }
          >
            {currentHost ? "Host Dashboard" : "Become a host"}
          </button>

          <div className="icon-circle-wrap" ref={langRef}>
            <div
              className="icon-circle"
              onClick={() => setLangMenuOpen((open) => !open)}
            >
              <IoGlobeOutline />
            </div>

            {langMenuOpen && (
              <div className="lang-dropdown">
                {["English (US)", "Urdu", "Arabic"].map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    className={
                      "lang-dropdown-item" +
                      (lang === language ? " lang-dropdown-item-active" : "")
                    }
                    onClick={() => {
                      setLanguage(lang);
                      setLangMenuOpen(false);
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className={
              "icon-circle menu-toggle" + (guestUser ? " menu-toggle-authed" : "")
            }
            onClick={() => setMenuOpen((open) => !open)}
          >
            {guestUser ? (
              <span className="navbar-guest-avatar">
                {guestUser.fullName.charAt(0).toUpperCase()}
              </span>
            ) : (
              <HiOutlineMenu />
            )}
          </div>

          {menuOpen && (
            <div className="nav-drawer">
              <div className="drawer-item">
                <IoHelpCircleOutline className="drawer-icon" />
                <span>Help Center</span>
              </div>

              <div className="drawer-divider" />

              {guestUser ? (
                <>
                  <div className="drawer-item drawer-guest-greeting">
                    <span>Hi, {guestUser.fullName.split(" ")[0]}</span>
                  </div>

                  <Link
                    to="/wishlist"
                    className="drawer-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaHeart className="drawer-icon" />
                    <span>Wishlist</span>
                  </Link>

                  <Link
                    to="/trips"
                    className="drawer-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaSuitcase className="drawer-icon" />
                    <span>My Trips</span>
                  </Link>

                  <Link
                    to="/profile"
                    className="drawer-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUser className="drawer-icon" />
                    <span>Profile</span>
                  </Link>

                  <button
                    type="button"
                    className="drawer-item drawer-logout-btn"
                    onClick={handleLogoutGuest}
                  >
                    <span>Log out</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="drawer-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Log in or sign up</span>
                </Link>
              )}

              <div className="drawer-divider" />

              <Link
                to={currentHost ? "/host/dashboard" : "/become-host"}
                className="drawer-item drawer-host"
                onClick={() => setMenuOpen(false)}
              >
                <FaHandshake className="drawer-icon" />
                <div className="drawer-host-text">
                  <strong>
                    {currentHost ? "Host Dashboard" : "Become a host"}
                  </strong>
                  <p>
                    {currentHost
                      ? "Manage your homes, services, and bookings."
                      : "It's easy to start hosting and earn extra income."}
                  </p>
                </div>
              </Link>

              {currentHost && (
                <button
                  type="button"
                  className="drawer-item drawer-logout-btn"
                  onClick={handleLogoutHost}
                >
                  <span>Log out of hosting ({currentHost.fullName?.split(" ")[0]})</span>
                </button>
              )}

              <div className="drawer-divider" />

              <div className="drawer-item">
                <FaGift className="drawer-icon" />
                <span>Gift cards</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
