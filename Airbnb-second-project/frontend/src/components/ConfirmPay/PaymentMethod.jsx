import { useState } from "react";
import { FaCcPaypal, FaApplePay, FaRegCreditCard } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import "./PaymentMethod.css";

const METHODS = [
  { key: "card", label: "Credit/Debit Card", icon: <FaRegCreditCard /> },
  { key: "paypal", label: "PayPal", icon: <FaCcPaypal /> },
  { key: "gpay", label: "Google Pay", icon: <SiGooglepay /> },
  { key: "applepay", label: "Apple Pay", icon: <FaApplePay /> },
];

function PaymentMethod({ selectedMethod, onSelectMethod, cardDetails, onCardDetailsChange }) {
  const [focusField, setFocusField] = useState(null);

  function handleCardChange(field, value) {
    onCardDetailsChange({ ...cardDetails, [field]: value });
  }

  return (
    <section className="cp-section payment-method">
      <h2 className="cp-section-title">Payment method</h2>

      <div className="payment-tabs">
        {METHODS.map((method) => (
          <button
            type="button"
            key={method.key}
            className={
              "payment-tab" +
              (selectedMethod === method.key ? " payment-tab-active" : "")
            }
            onClick={() => onSelectMethod(method.key)}
          >
            <span className="payment-tab-icon">{method.icon}</span>
            <span className="payment-tab-label">{method.label}</span>
          </button>
        ))}
      </div>

      {selectedMethod === "card" && (
        <div className="card-details-form">
          <div className="cp-field">
            <label>Card number</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              value={cardDetails.number}
              onFocus={() => setFocusField("number")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleCardChange("number", e.target.value)}
              className={focusField === "number" ? "cp-input-focus" : ""}
            />
          </div>

          <div className="cp-field">
            <label>Name on card</label>
            <input
              type="text"
              placeholder="Full name as shown on card"
              value={cardDetails.name}
              onFocus={() => setFocusField("name")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleCardChange("name", e.target.value)}
              className={focusField === "name" ? "cp-input-focus" : ""}
            />
          </div>

          <div className="cp-field-row">
            <div className="cp-field">
              <label>Expiration date</label>
              <input
                type="text"
                placeholder="MM / YY"
                maxLength={7}
                value={cardDetails.expiry}
                onFocus={() => setFocusField("expiry")}
                onBlur={() => setFocusField(null)}
                onChange={(e) => handleCardChange("expiry", e.target.value)}
                className={focusField === "expiry" ? "cp-input-focus" : ""}
              />
            </div>

            <div className="cp-field">
              <label>CVV</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="123"
                maxLength={4}
                value={cardDetails.cvv}
                onFocus={() => setFocusField("cvv")}
                onBlur={() => setFocusField(null)}
                onChange={(e) => handleCardChange("cvv", e.target.value)}
                className={focusField === "cvv" ? "cp-input-focus" : ""}
              />
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "paypal" && (
        <p className="payment-redirect-note">
          You'll be redirected to PayPal to complete your payment securely
          after clicking "Confirm and pay".
        </p>
      )}

      {selectedMethod === "gpay" && (
        <p className="payment-redirect-note">
          You'll confirm this payment using Google Pay after clicking
          "Confirm and pay".
        </p>
      )}

      {selectedMethod === "applepay" && (
        <p className="payment-redirect-note">
          You'll confirm this payment using Apple Pay after clicking "Confirm
          and pay".
        </p>
      )}
    </section>
  );
}

export default PaymentMethod;