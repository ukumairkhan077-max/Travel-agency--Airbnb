import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function SubServiceInfoPanel({ item }) {
  // Keyed by item.id from the parent, so this remounts (and its state
  // resets) automatically whenever a different sub-service is selected.
  const [showDates, setShowDates] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="subservice-info-panel">
      <h2 className="subservice-title">{item.title}</h2>

      <p className="subservice-meta">
        {item.price && (
          <>
            ${item.price} / {item.priceUnit}
            <span className="subservice-meta-dot">·</span>
          </>
        )}
        {item.duration}
      </p>

      <p className="subservice-description">{item.description}</p>

      {!showDates ? (
        <button
          type="button"
          className="subservice-show-dates-btn"
          onClick={() => setShowDates(true)}
        >
          Show dates
        </button>
      ) : (
        <div className="subservice-date-picker">
          <div className="subservice-date-row">
            <div className="subservice-date-field">
              <label>Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="subservice-date-field">
              <label>Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <button type="button" className="subservice-reserve-btn">
            Reserve
          </button>
        </div>
      )}
    </div>
  );
}

function SubServiceModal({ subServices, activeIndex, onClose, onSelectIndex }) {
  const activeItem = subServices[activeIndex];

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!activeItem) return null;

  return (
    <div className="subservice-modal-overlay" onClick={onClose}>
      <div className="subservice-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="subservice-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <IoClose />
        </button>

        <div className="subservice-modal-body">
          {/* Thumbnail rail */}
          <div className="subservice-thumb-rail">
            {subServices.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={
                  "subservice-thumb" +
                  (index === activeIndex ? " subservice-thumb-active" : "")
                }
                onClick={() => onSelectIndex(index)}
              >
                <img src={item.image} alt={item.title} />
              </button>
            ))}
          </div>

          {/* Big image */}
          <div className="subservice-main-image-wrap">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="subservice-main-image"
            />
          </div>

          {/* Info panel (remounts per sub-service via key) */}
          <SubServiceInfoPanel item={activeItem} key={activeItem.id} />
        </div>
      </div>
    </div>
  );
}

export default SubServiceModal;
