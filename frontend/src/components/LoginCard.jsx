import React, { useState } from "react";

const LoginCard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="reserve-card">

      <div className="card-header">

        <h2>1. Log in or Sign Up</h2>

        {!showForm && (
          <button
            className="primary-btn"
            onClick={() => setShowForm(true)}
          >
            Continue
          </button>
        )}

      </div>

      {showForm && (

        <div className="login-form">

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button className="primary-btn full-btn">
            Login
          </button>

          <p className="or-text">OR</p>

          <button className="outline-btn">
            Continue with Google
          </button>

          <button className="outline-btn">
            Continue with Facebook
          </button>

        </div>

      )}

    </div>
  );
};

export default LoginCard;