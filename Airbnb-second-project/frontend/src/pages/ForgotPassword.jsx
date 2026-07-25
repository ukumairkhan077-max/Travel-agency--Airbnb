import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { isValidEmail } from "../utils/validators";
import "../styles/login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: 460 }}>
          <div className="auth-left" style={{ flex: 1 }}>
            <div className="auth-form-wrap">
              <h1 className="auth-title">Reset your password</h1>
              <p className="auth-subtitle">
                {sent
                  ? "If an account exists for that email, a reset link has been sent."
                  : "Enter your email and we'll send you a link to reset your password."}
              </p>

              {!sent ? (
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className="auth-field-error">{error}</p>}
                  </div>

                  <button type="submit" className="auth-submit-btn">
                    Send reset link
                  </button>
                </form>
              ) : (
                <Link to="/login" className="auth-submit-btn" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
                  Back to login
                </Link>
              )}

              <p className="auth-toggle-text">
                <Link to="/login" className="auth-toggle-btn" style={{ background: "none", border: "none" }}>
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
