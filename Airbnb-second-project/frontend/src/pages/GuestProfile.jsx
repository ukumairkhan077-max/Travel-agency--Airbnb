import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useAuth } from "../context/AuthContext";
import "./GuestProfile.css";

function GuestProfile() {
  const { guestUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="guest-profile-page">
        <div className="guest-profile-card">
          <div className="guest-profile-avatar">
            {(guestUser?.fullName || "G").charAt(0).toUpperCase()}
          </div>

          <h1 className="guest-profile-name">{guestUser?.fullName}</h1>
          <p className="guest-profile-email">{guestUser?.email}</p>

          <p className="guest-profile-since">
            Member since{" "}
            {guestUser?.createdAt
              ? new Date(guestUser.createdAt).toLocaleDateString()
              : "—"}
          </p>

          <button
            type="button"
            className="guest-profile-logout-btn"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GuestProfile;
