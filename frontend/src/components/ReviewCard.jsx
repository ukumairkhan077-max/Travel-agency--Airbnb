import React from "react";

const ReviewCard = () => {

  return (

    <div className="reserve-card">

      <h2>3. Review Reservation</h2>

      <div className="review-box">

        <div className="review-row">

          <span>Status</span>

          <span>Ready</span>

        </div>

        <div className="review-row">

          <span>Login</span>

          <span>✔</span>

        </div>

        <div className="review-row">

          <span>Payment</span>

          <span>✔</span>

        </div>

        <div className="review-row">

          <span>Reservation</span>

          <span>2 Nights</span>

        </div>

        <button className="confirm-btn">

          Confirm Reservation

        </button>

      </div>

    </div>

  );
};

export default ReviewCard;