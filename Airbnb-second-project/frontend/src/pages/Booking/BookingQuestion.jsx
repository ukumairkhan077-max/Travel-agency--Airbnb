import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./BookingFlow.css";

function QuestionIllustration() {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
      <ellipse cx="110" cy="140" rx="90" ry="14" fill="#f2f2f2" />
      <circle cx="110" cy="62" r="46" fill="#ffe4e9" />
      <circle cx="94" cy="54" r="6" fill="#222222" />
      <circle cx="126" cy="54" r="6" fill="#222222" />
      <path
        d="M92 76c6 8 30 8 36 0"
        stroke="#222222"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="70" y="104" width="80" height="34" rx="10" fill="#ff385c" />
      <text
        x="110"
        y="126"
        textAnchor="middle"
        fill="#fff"
        fontSize="20"
        fontWeight="700"
      >
        ?
      </text>
    </svg>
  );
}

function BookingQuestion() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const passedState = location.state || {};
  const { checkIn, checkOut, guests } = passedState;

  function handleNo() {
    navigate(`/confirm-pay/${id}`, {
      state: { checkIn, checkOut, guests },
    });
  }

  function handleYes() {
    navigate("/services", {
      state: {
        bookingMode: true,
        homeId: Number(id),
        checkIn,
        checkOut,
        guests,
      },
    });
  }

  return (
    <div className="booking-flow-page">
      <header className="booking-flow-header">
        <Link to="/" className="booking-flow-logo">
          airbnb
        </Link>
      </header>

      <div className="booking-flow-container">
        <button
          type="button"
          className="booking-flow-back-btn"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
          Back
        </button>

        <div className="booking-question-container">
          <div className="booking-question-illustration">
            <QuestionIllustration />
          </div>

          <h1 className="booking-question-heading">
            Do you want to add a service?
          </h1>
          <p className="booking-question-subheading">
            Make your trip extra special — add a massage, a private chef, a
            photoshoot, or any other local experience to this booking.
          </p>

          <div className="booking-question-actions">
            <button
              type="button"
              className="booking-question-btn booking-question-btn-no"
              onClick={handleNo}
            >
              No, skip
            </button>

            <button
              type="button"
              className="booking-question-btn booking-question-btn-yes"
              onClick={handleYes}
            >
              Yes, add a service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingQuestion;