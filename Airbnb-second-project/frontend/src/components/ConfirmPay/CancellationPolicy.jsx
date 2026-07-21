import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import "./CancellationPolicy.css";

function CancellationPolicy({ freeCancellationDate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="cp-section cancellation-policy">
      <h2 className="cp-section-title">Cancellation policy</h2>

      <p className="cancellation-summary">
        <strong>Free cancellation before {freeCancellationDate}.</strong>{" "}
        Cancel before check-in for a partial refund.
      </p>

      {expanded && (
        <div className="cancellation-details">
          <p>
            Get a full refund if you cancel before {freeCancellationDate}. If
            you cancel after that, your refund will depend on how close to
            check-in you cancel and is based on the Host's cancellation
            policy.
          </p>
          <p>
            No refunds are issued for cancellations made within 24 hours of
            check-in, or after check-in has occurred.
          </p>
        </div>
      )}

      <button
        type="button"
        className="cancellation-toggle-btn"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show less" : "Show more"}
        {expanded ? <IoChevronUp /> : <IoChevronDown />}
      </button>
    </section>
  );
}

export default CancellationPolicy;