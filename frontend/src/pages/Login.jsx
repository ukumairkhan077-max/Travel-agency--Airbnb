import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import signupImage from "../assets/images/signup.png";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to your auth API / backend route here
    console.log(isLogin ? "Logging in..." : "Signing up...");
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">

        {/* Left Container - Form */}

        <div className="auth-left">

          <div className="auth-form-wrap">

            <h1 className="auth-title">
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>

            <p className="auth-subtitle">
              {isLogin
                ? "Log in to continue exploring stays near you."
                : "Sign up to start booking unique homes and experiences."}
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>

              {!isLogin && (
                <div className="input-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    id="fullname"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLogin ? "Log In" : "Sign Up"}
              </button>

            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <div className="social-buttons">

              <button className="social-btn">
                <FcGoogle className="social-icon" />
                Continue with Google
              </button>

              <button className="social-btn">
                <FaFacebook className="social-icon facebook" />
                Continue with Facebook
              </button>

              <button className="social-btn">
                <FaApple className="social-icon apple" />
                Continue with Apple
              </button>

            </div>

            <p className="auth-toggle-text">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="auth-toggle-btn"
                onClick={() => setIsLogin((prev) => !prev)}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>

          </div>

        </div>

        {/* Right Container - Image */}

        <div className="auth-right">
          <img src={signupImage} alt="Airbnb host welcoming guests" />
          <div className="auth-right-overlay">
            <h2>Find your next stay</h2>
            <p>Unique homes and experiences, all in one place.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;