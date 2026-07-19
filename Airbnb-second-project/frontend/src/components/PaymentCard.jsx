import React, { useState } from "react";

const PaymentCard = () => {

  const [show, setShow] = useState(false);

  const [method, setMethod] = useState("");

  return (

    <div className="reserve-card">

      <div className="card-header">

        <h2>2. Add Payment Method</h2>

        {!show && (
          <button
            className="primary-btn"
            onClick={() => setShow(true)}
          >
            Add
          </button>
        )}

      </div>

      {show && (

        <div className="payment-box">

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="JazzCash"
              checked={method === "JazzCash"}
              onChange={(e) => setMethod(e.target.value)}
            />

            JazzCash

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="EasyPaisa"
              checked={method === "EasyPaisa"}
              onChange={(e) => setMethod(e.target.value)}
            />

            EasyPaisa

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="Card"
              checked={method === "Card"}
              onChange={(e) => setMethod(e.target.value)}
            />

            Credit / Debit Card

          </label>

          {method === "JazzCash" && (

            <div className="payment-form">

              <input
                type="text"
                placeholder="JazzCash Number"
              />

              <button className="primary-btn full-btn">
                Verify
              </button>

            </div>

          )}

          {method === "EasyPaisa" && (

            <div className="payment-form">

              <input
                type="text"
                placeholder="EasyPaisa Number"
              />

              <button className="primary-btn full-btn">
                Verify
              </button>

            </div>

          )}

          {method === "Card" && (

            <div className="payment-form">

              <input
                type="text"
                placeholder="Card Holder Name"
              />

              <input
                type="text"
                placeholder="Card Number"
              />

              <div className="card-row">

                <input
                  type="text"
                  placeholder="MM/YY"
                />

                <input
                  type="password"
                  placeholder="CVV"
                />

              </div>

              <button className="primary-btn full-btn">
                Save Card
              </button>

            </div>

          )}

        </div>

      )}

    </div>
  );
};

export default PaymentCard;