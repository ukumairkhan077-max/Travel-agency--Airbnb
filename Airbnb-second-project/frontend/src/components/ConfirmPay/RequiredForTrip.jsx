import { useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import "./RequiredForTrip.css";

function RequiredForTrip() {
  const [phone, setPhone] = useState("");

  return (
    <section className="cp-section required-for-trip">
      <h2 className="cp-section-title">Required for your trip</h2>

      <div className="required-row">
        <div className="required-row-icon">
          <HiOutlinePhone />
        </div>

        <div className="required-row-text">
          <p className="required-row-title">Add a phone number</p>
          <p className="required-row-sub">
            Your Host and the ground staff will use this to get in touch with
            you before and during your trip.
          </p>

          <input
            type="tel"
            className="required-phone-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default RequiredForTrip;