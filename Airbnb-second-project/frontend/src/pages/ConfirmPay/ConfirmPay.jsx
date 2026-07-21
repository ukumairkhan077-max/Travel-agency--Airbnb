import { useState, useMemo } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import dummyListings from "../../data/dummylisting";

import LoginReminder from "../../components/ConfirmPay/LoginReminder";
import RequiredForTrip from "../../components/ConfirmPay/RequiredForTrip";
import PaymentMethod from "../../components/ConfirmPay/PaymentMethod";
import BillingAddress from "../../components/ConfirmPay/BillingAddress";
import CancellationPolicy from "../../components/ConfirmPay/CancellationPolicy";
import GroundRules from "../../components/ConfirmPay/GroundRules";
import CouponSection from "../../components/ConfirmPay/CouponSection";
import ConfirmButton from "../../components/ConfirmPay/ConfirmButton";
import BookingSummary from "../../components/ConfirmPay/BookingSummary";

import "./ConfirmPay.css";

const PROMO_CODES = {
  AIRBNB10: 0.1,
};

function addDays(dateString, days) {
  const date = dateString ? new Date(dateString) : new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatFreeCancellationDate(checkIn) {
  if (!checkIn) return "your check-in date";
  const date = new Date(checkIn);
  if (Number.isNaN(date.getTime())) return "your check-in date";
  date.setDate(date.getDate() - 2);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function ConfirmPay() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const listing = dummyListings.find((item) => item.id === Number(id));

  const passedState = location.state || {};

  const [checkIn, setCheckIn] = useState(
    passedState.checkIn || addDays(null, 7)
  );
  const [checkOut, setCheckOut] = useState(
    passedState.checkOut || addDays(passedState.checkIn || null, 12)
  );
  const [guests, setGuests] = useState(passedState.guests || 1);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    country: "Pakistan",
    street: "",
    city: "",
    zip: "",
  });

  const [appliedPromo, setAppliedPromo] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const reviewCount = listing
    ? 20 + ((listing.id * 37) % 260)
    : 0;

  const nights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const priceBreakdown = useMemo(() => {
    if (!listing) {
      return {
        nightlyPrice: 0,
        nights,
        cleaningFee: 0,
        serviceFee: 0,
        taxes: 0,
        discount: 0,
        total: 0,
      };
    }

    const nightlyPrice = listing.price;
    const subtotal = nightlyPrice * nights;
    const cleaningFee = Math.round(subtotal * 0.06);
    const serviceFee = Math.round(subtotal * 0.12);
    const taxes = Math.round((subtotal + cleaningFee + serviceFee) * 0.05);

    const discountRate = appliedPromo ? PROMO_CODES[appliedPromo] || 0 : 0;
    const discount = Math.round(subtotal * discountRate);

    const total = subtotal + cleaningFee + serviceFee + taxes - discount;

    return {
      nightlyPrice,
      nights,
      cleaningFee,
      serviceFee,
      taxes,
      discount,
      total,
    };
  }, [listing, nights, appliedPromo]);

  function handleApplyPromo(code) {
    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      return true;
    }
    return false;
  }

  function handleConfirm() {
    if (!agreedToTerms) return;

    setIsSubmitting(true);

    // Simulated payment processing (no backend wired up yet)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1200);
  }

  if (!listing) {
    return (
      <div className="confirm-pay-not-found">
        <h2>Listing not found</h2>
        <Link to="/listings">Back to listings</Link>
      </div>
    );
  }

  if (isConfirmed) {
    return (
      <div className="confirm-pay-success">
        <div className="confirm-pay-success-card">
          <h1>🎉 Booking confirmed!</h1>
          <p>
            Your stay at <strong>{listing.title}</strong> from{" "}
            {checkIn} to {checkOut} for {guests} guest
            {guests > 1 ? "s" : ""} is booked.
          </p>
          <Link to="/listings" className="confirm-pay-success-btn">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="confirm-pay-page">
      <header className="confirm-pay-header">
        <Link to="/" className="confirm-pay-logo">
          airbnb
        </Link>
      </header>

      <div className="confirm-pay-container">
        <button
          type="button"
          className="confirm-pay-back-btn"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
          Back
        </button>

        <div className="confirm-pay-grid">
          {/* LEFT COLUMN */}
          <div className="confirm-pay-left">
            <h1 className="confirm-pay-heading">Confirm and pay</h1>

            <RequiredForTrip />
            <LoginReminder />

            <PaymentMethod
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
              cardDetails={cardDetails}
              onCardDetailsChange={setCardDetails}
            />

            <BillingAddress
              address={billingAddress}
              onAddressChange={setBillingAddress}
            />

            <CancellationPolicy
              freeCancellationDate={formatFreeCancellationDate(checkIn)}
            />

            <GroundRules />

            <CouponSection
              appliedCode={appliedPromo}
              onApply={handleApplyPromo}
              onRemove={() => setAppliedPromo(null)}
            />

            <ConfirmButton
              agreedToTerms={agreedToTerms}
              onToggleTerms={() => setAgreedToTerms((prev) => !prev)}
              onConfirm={handleConfirm}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* RIGHT COLUMN (sticky) */}
          <div className="confirm-pay-right">
            <BookingSummary
              listing={listing}
              reviewCount={reviewCount}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onDatesChange={(newCheckIn, newCheckOut) => {
                setCheckIn(newCheckIn);
                setCheckOut(newCheckOut);
              }}
              onGuestsChange={setGuests}
              priceDetails={priceBreakdown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPay;