import { useState } from "react";
import { FaRegCreditCard, FaMobileAlt } from "react-icons/fa";
import "./PaymentMethod.css";

const METHODS = [
  { key: "card", label: "Credit/Debit Card", icon: <FaRegCreditCard /> },
  {
    key: "easypaisa",
    label: "Easypaisa",
    icon: <FaMobileAlt />,
    accent: "easypaisa",
  },
  {
    key: "jazzcash",
    label: "JazzCash",
    icon: <FaMobileAlt />,
    accent: "jazzcash",
  },
];

function PaymentMethod({
  selectedMethod,
  onSelectMethod,
  cardDetails,
  onCardDetailsChange,
  walletNumber,
  onWalletNumberChange,
}) {
  const [focusField, setFocusField] = useState(null);

  function handleCardChange(field, value) {
    onCardDetailsChange({ ...cardDetails, [field]: value });
  }

  function handleWalletNumberChange(value) {
    // keep digits only, cap at 11 (Pakistani mobile numbers, e.g. 03XXXXXXXXX)
    const digitsOnly = value.replace(/\D/g, "").slice(0, 11);
    onWalletNumberChange(digitsOnly);
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
              (method.accent ? ` payment-tab-${method.accent}` : "") +
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

      {selectedMethod === "easypaisa" && (
        <div className="wallet-details-form wallet-details-easypaisa">
          <div className="cp-field">
            <label>Easypaisa mobile number</label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="03XXXXXXXXX"
              maxLength={11}
              value={walletNumber}
              onFocus={() => setFocusField("wallet")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleWalletNumberChange(e.target.value)}
              className={focusField === "wallet" ? "cp-input-focus" : ""}
            />
          </div>

          <p className="wallet-note">
            After clicking "Confirm and pay", you'll get a payment request
            notification on your Easypaisa app. Approve it there to complete
            your booking.
          </p>
        </div>
      )}

      {selectedMethod === "jazzcash" && (
        <div className="wallet-details-form wallet-details-jazzcash">
          <div className="cp-field">
            <label>JazzCash mobile account number</label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="03XXXXXXXXX"
              maxLength={11}
              value={walletNumber}
              onFocus={() => setFocusField("wallet")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleWalletNumberChange(e.target.value)}
              className={focusField === "wallet" ? "cp-input-focus" : ""}
            />
          </div>

          <p className="wallet-note">
            After clicking "Confirm and pay", you'll get a payment request
            notification on your JazzCash app. Approve it there to complete
            your booking.
          </p>
        </div>
      )}
    </section>
  );
}

export default PaymentMethod;