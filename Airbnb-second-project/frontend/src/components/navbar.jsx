import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Airbnb-logo.png";
import { MdTravelExplore } from "react-icons/md";
import { FaHome, FaGift, FaHandshake, FaUserPlus } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoGlobeOutline, IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import SearchBar from "./searchbar";

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
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

            <div className="menu-item">
              <MdTravelExplore className="menu-icon" />
              <span>Experiences</span>
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
            >
              <RiServiceFill className="menu-icon" />
              <span>Services</span>
            </NavLink>
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
            onClick={() => navigate("/login")}
          >
            Become a host
          </button>

          <div className="icon-circle">
            <IoGlobeOutline />
          </div>

          <div
            className="icon-circle menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HiOutlineMenu />
          </div>

          {menuOpen && (
            <div className="nav-drawer">
              <div className="drawer-item">
                <IoHelpCircleOutline className="drawer-icon" />
                <span>Help Center</span>
              </div>

              <div className="drawer-divider" />

              <div className="drawer-item drawer-host">
                <FaHandshake className="drawer-icon" />
                <div className="drawer-host-text">
                  <strong>Become a host</strong>
                  <p>It's easy to start hosting and earn extra income.</p>
                </div>
              </div>

              <div className="drawer-divider" />

              <div className="drawer-item">
                <FaUserPlus className="drawer-icon" />
                <span>Refer a Host</span>
              </div>

              <div className="drawer-item">
                <FaHandshake className="drawer-icon" />
                <span>Find a co-host</span>
              </div>

              <div className="drawer-item">
                <FaGift className="drawer-icon" />
                <span>Gift cards</span>
              </div>

              <div className="drawer-divider" />

              <Link
                to="/login"
                className="drawer-item"
                onClick={() => setMenuOpen(false)}
              >
                <span>Log in or sign up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
