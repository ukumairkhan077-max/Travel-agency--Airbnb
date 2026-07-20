import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import signupImage from "../assets/images/signup.png";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(isLogin ? "Logging in..." : "Signing up...");
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

              <form className="auth-form" onSubmit={handleSubmit}>

                {!isLogin && (
                  <div className="input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {!isLogin && (
                  <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                )}

                {isLogin && (
                  <Link
                    to="/forgot-password"
                    className="forgot-link"
                  >
                    Forgot Password?
                  </Link>
                )}

                <button
                  type="submit"
                  className="auth-submit-btn"
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>

              </form>

              <p className="auth-toggle-text">

                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  className="auth-toggle-btn"
                  onClick={() => setIsLogin(!isLogin)}
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