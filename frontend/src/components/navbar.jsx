import "../styles/navbar.css";

import { NavLink } from "react-router-dom";

import logo from "../assets/images/Airbnb logo.png";

import { MdTravelExplore } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">
        <img src={logo} alt="Airbnb Logo" />
      </div>

      {/* Middle Menu */}

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

        <div className="menu-item">
          <RiServiceFill className="menu-icon" />
          <span>Services</span>
        </div>

      </div>

      {/* Right Side */}

      <div className="right-side">

        <button className="host-btn">
          Become a host
        </button>

        <div className="icon-circle">
          <IoGlobeOutline />
        </div>

        <div className="icon-circle">
          <HiOutlineMenu />
        </div>

      </div>

    </nav>
  );
}

export default Navbar;