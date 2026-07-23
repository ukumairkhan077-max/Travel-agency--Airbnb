import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useApp } from "../../context/AppContext";
import { generateHostId } from "../../utils/idGenerator";
import {
  isValidEmail,
  isValidPhone,
  isValidCNIC,
} from "../../utils/validators";
import "./HostSignup.css";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  cnic: "",
  password: "",
  confirmPassword: "",
  city: "",
  address: "",
};

function HostSignup() {
  const navigate = useNavigate();
  const { loginHost } = useApp();

  const [form, setForm] = useState(INITIAL_FORM);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!isValidEmail(form.email)) nextErrors.email = "Enter a valid email.";
    if (!isValidPhone(form.phone))
      nextErrors.phone = "Enter a valid phone number (03XXXXXXXXX).";
    if (!isValidCNIC(form.cnic))
      nextErrors.cnic = "Enter a valid CNIC (e.g. 42101-1234567-1).";
    if (form.password.length < 6)
      nextErrors.password = "Password must be at least 6 characters.";
    if (form.confirmPassword !== form.password)
      nextErrors.confirmPassword = "Passwords do not match.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.address.trim()) nextErrors.address = "Address is required.";
    if (!agreed) nextErrors.agreed = "You must agree to the Hosting Policy.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const host = {
      id: generateHostId(),
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      cnic: form.cnic.trim(),
      city: form.city.trim(),
      address: form.address.trim(),
      createdAt: new Date().toISOString(),
    };

    loginHost(host);
    navigate("/host/dashboard");
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="host-signup-page">
        <div className="host-signup-card">
          <h1 className="host-signup-title">Become a host</h1>
          <p className="host-signup-subtitle">
            Tell us a bit about yourself to set up your hosting account.
          </p>

          <form className="host-signup-form" onSubmit={handleSubmit} noValidate>
            <div className="host-field">
              <label>Full Name</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="host-field-error">{errors.fullName}</p>
              )}
            </div>

            <div className="host-field">
              <label>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="host-field-error">{errors.email}</p>
              )}
            </div>

            <div className="host-field-row">
              <div className="host-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="03XXXXXXXXX"
                />
                {errors.phone && (
                  <p className="host-field-error">{errors.phone}</p>
                )}
              </div>

              <div className="host-field">
                <label>CNIC</label>
                <input
                  type="text"
                  value={form.cnic}
                  onChange={(e) => handleChange("cnic", e.target.value)}
                  placeholder="42101-1234567-1"
                />
                {errors.cnic && (
                  <p className="host-field-error">{errors.cnic}</p>
                )}
              </div>
            </div>

            <div className="host-field-row">
              <div className="host-field">
                <label>Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="At least 6 characters"
                />
                {errors.password && (
                  <p className="host-field-error">{errors.password}</p>
                )}
              </div>

              <div className="host-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                  placeholder="Re-enter your password"
                />
                {errors.confirmPassword && (
                  <p className="host-field-error">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="host-field">
              <label>City</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="e.g. Lahore"
              />
              {errors.city && <p className="host-field-error">{errors.city}</p>}
            </div>

            <div className="host-field">
              <label>Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Street address"
              />
              {errors.address && (
                <p className="host-field-error">{errors.address}</p>
              )}
            </div>

            <label className="host-signup-checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>I agree to the Airbnb Hosting Policy</span>
            </label>
            {errors.agreed && (
              <p className="host-field-error">{errors.agreed}</p>
            )}

            <button type="submit" className="host-signup-submit-btn">
              Continue
            </button>
          </form>

          <p className="host-signup-footer-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default HostSignup;