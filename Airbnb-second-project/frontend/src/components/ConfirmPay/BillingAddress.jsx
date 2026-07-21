import "./BillingAddress.css";

const COUNTRIES = [
  "Pakistan",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Canada",
];

function BillingAddress({ address, onAddressChange }) {
  function handleChange(field, value) {
    onAddressChange({ ...address, [field]: value });
  }

  return (
    <section className="cp-section billing-address">
      <h2 className="cp-section-title">Billing address</h2>

      <div className="billing-form">
        <div className="cp-field">
          <label>Country/Region</label>
          <select
            value={address.country}
            onChange={(e) => handleChange("country", e.target.value)}
          >
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="cp-field">
          <label>Street address</label>
          <input
            type="text"
            placeholder="House number and street name"
            value={address.street}
            onChange={(e) => handleChange("street", e.target.value)}
          />
        </div>

        <div className="cp-field-row">
          <div className="cp-field">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>

          <div className="cp-field">
            <label>ZIP / Postal code</label>
            <input
              type="text"
              placeholder="Postal code"
              value={address.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BillingAddress;