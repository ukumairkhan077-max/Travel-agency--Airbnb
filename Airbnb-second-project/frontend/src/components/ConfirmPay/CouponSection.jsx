import { useState } from "react";
import { IoPricetagOutline, IoCloseCircle } from "react-icons/io5";
import "./CouponSection.css";

function CouponSection({ appliedCode, onApply, onRemove }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleApply() {
    const code = inputValue.trim().toUpperCase();

    if (!code) {
      setError("Please enter a promo code.");
      return;
    }

    const success = onApply(code);

    if (!success) {
      setError("This promo code is invalid or expired.");
      return;
    }

    setError("");
    setInputValue("");
  }

  return (
    <section className="cp-section coupon-section">
      <h2 className="cp-section-title">Promo code</h2>

      {appliedCode ? (
        <div className="coupon-applied-row">
          <span className="coupon-applied-badge">
            <IoPricetagOutline />
            {appliedCode} applied
          </span>

          <button
            type="button"
            className="coupon-remove-btn"
            onClick={onRemove}
          >
            <IoCloseCircle />
            Remove
          </button>
        </div>
      ) : (
        <div className="coupon-input-row">
          <input
            type="text"
            placeholder="Enter promo code"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleApply();
              }
            }}
          />

          <button
            type="button"
            className="coupon-apply-btn"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      )}

      {error && <p className="coupon-error">{error}</p>}

      <p className="coupon-hint">Try code AIRBNB10 for 10% off.</p>
    </section>
  );
}

export default CouponSection;