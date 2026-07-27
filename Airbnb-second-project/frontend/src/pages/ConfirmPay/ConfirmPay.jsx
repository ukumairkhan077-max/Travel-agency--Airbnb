import { useState, useMemo } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useApp } from "../../context/AppContext";
import { useAuth } from "../../context/AuthContext";
import { generateBookingId } from "../../utils/idGenerator";

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
  const { homes, addBooking } = useApp();
  const { guestUser } = useAuth();

  const listing = homes.find((item) => String(item.id) === String(id));

  const passedState = location.state || {};
  const selectedService = passedState.selectedService || null;

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
  const [walletNumber, setWalletNumber] = useState("");
  const [billingAddress, setBillingAddress] = useState({
    country: "Pakistan",
    street: "",
    city: "",
    zip: "",
  });

  const [appliedPromo, setAppliedPromo] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentError, setPaymentError] = useState("");

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
        servicePrice: 0,
        serviceTax: 0,
        discount: 0,
        total: 0,
      };
    }

    const nightlyPrice = listing.price;
    const subtotal = nightlyPrice * nights;
    const cleaningFee = Math.round(subtotal * 0.06);
    const serviceFee = Math.round(subtotal * 0.12);
    const taxes = Math.round((subtotal + cleaningFee + serviceFee) * 0.05);

    // Add-on service (from the "Do you want to add a service?" flow)
    const servicePrice = selectedService ? selectedService.price : 0;
    const serviceTax = selectedService ? Math.round(servicePrice * 0.05) : 0;

    const discountRate = appliedPromo ? PROMO_CODES[appliedPromo] || 0 : 0;
    const discount = Math.round(subtotal * discountRate);

    const total =
      subtotal +
      cleaningFee +
      serviceFee +
      taxes +
      servicePrice +
      serviceTax -
      discount;

    return {
      nightlyPrice,
      nights,
      cleaningFee,
      serviceFee,
      taxes,
      servicePrice,
      serviceTax,
      discount,
      total,
    };
  }, [listing, nights, appliedPromo, selectedService]);

  function handleApplyPromo(code) {
    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      return true;
    }
    return false;
  }

  async function handleConfirm() {
    if (!agreedToTerms) return;

    setPaymentError("");
    setIsSubmitting(true);

    try {
      // Brief pause so the "Processing..." state is visible — once a real
      // payment gateway is wired up, this delay is naturally however long
      // the actual charge takes.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const bookingId = generateBookingId();

      await addBooking({
        id: bookingId,
        guestId: guestUser.id,
        homeId: listing.id,
        homeTitle: listing.title,
        serviceTitle: selectedService ? selectedService.title : null,
        checkIn,
        checkOut,
        guests,
        paymentMethod,
        total: priceBreakdown.total,
        createdAt: new Date().toISOString(),
      });

      navigate(`/thank-you/${bookingId}`);
    } catch (error) {
      setPaymentError(
        error.message || "We couldn't process your payment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!listing) {
    return (
      <div className="confirm-pay-not-found">
        <h2>Listing not found</h2>
        <Link to="/listings">Back to listings</Link>
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

            <p className="confirm-pay-booking-as">
              Booking as <strong>{guestUser?.fullName}</strong> ({guestUser?.email})
            </p>

            <PaymentMethod
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
              cardDetails={cardDetails}
              onCardDetailsChange={setCardDetails}
              walletNumber={walletNumber}
              onWalletNumberChange={setWalletNumber}
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
              error={paymentError}
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
              selectedService={selectedService}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPay;