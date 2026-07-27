import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import signupImage from "../assets/images/signup.png";
import { useAuth } from "../context/AuthContext";
import { isValidEmail } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const nextErrors = {};

    if (!isLogin && !form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    if (!isValidEmail(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (form.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }
    if (!isLogin && form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goToDestination() {
    const from = location.state?.from || "/";
    const background = location.state?.background || null;
    navigate(from, { replace: true, state: background });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setAuthError("");
    setIsSubmitting(true);

    try {
      if (isLogin) {
        await login({ email: form.email, password: form.password });
      } else {
        await signup({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        });
      }
      goToDestination();
    } catch (error) {
      setAuthError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="auth-page">

        <div className="auth-card">

          {/* Left Card */}

          <div className="auth-left">

            <div className="auth-form-wrap">

              <h1 className="auth-title">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>

              <p className="auth-subtitle">
                {isLogin
                  ? "Login to continue your journey with Airbnb."
                  : "Sign up and start exploring unique stays around the world."}
              </p>

              <form className="auth-form" onSubmit={handleSubmit} noValidate>

                {!isLogin && (
                  <div className="input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                    />
                    {errors.fullName && (
                      <p className="auth-field-error">{errors.fullName}</p>
                    )}
                  </div>
                )}

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="auth-field-error">{errors.email}</p>
                  )}
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  {errors.password && (
                    <p className="auth-field-error">{errors.password}</p>
                  )}
                </div>

                {!isLogin && (
                  <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                    />
                    {errors.confirmPassword && (
                      <p className="auth-field-error">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {isLogin && (
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot Password?
                  </Link>
                )}

                {authError && <p className="auth-field-error">{authError}</p>}

                <button
                  type="submit"
                  className="auth-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Please wait..."
                    : isLogin
                    ? "Login"
                    : "Create Account"}
                </button>

              </form>

              <p className="auth-toggle-text">

                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  className="auth-toggle-btn"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setErrors({});
                  }}
                >
                  {isLogin ? " Sign Up" : " Login"}
                </button>

              </p>

            </div>

          </div>

          {/* Right Card */}

          <div className="auth-right">

            <img
              src={signupImage}
              alt="Airbnb"
            />

            <div className="auth-right-overlay">

              <h2>
                Find Your Perfect Stay
              </h2>

              <p>
                Discover unique homes, unforgettable experiences,
                and amazing places around the world.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;
