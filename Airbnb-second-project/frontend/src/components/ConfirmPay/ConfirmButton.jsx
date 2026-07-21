import "./ConfirmButton.css";

function ConfirmButton({ agreedToTerms, onToggleTerms, onConfirm, isSubmitting }) {
  return (
    <section className="cp-section confirm-button-section">
      <p className="confirm-terms-text">
        By selecting the button below, I agree to the{" "}
        <a href="#terms">Terms of Service</a>,{" "}
        <a href="#payments">Payments Terms of Service</a>, and I acknowledge
        the <a href="#refund">Refund Policy</a> and that Airbnb can charge my
        payment method if I'm responsible for damage.
      </p>

      <label className="confirm-terms-checkbox">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={onToggleTerms}
        />
        <span>I agree to the terms and conditions</span>
      </label>

      <button
        type="button"
        className="confirm-pay-btn"
        disabled={!agreedToTerms || isSubmitting}
        onClick={onConfirm}
      >
        {isSubmitting ? "Processing..." : "Confirm and pay"}
      </button>
    </section>
  );
}

export default ConfirmButton;