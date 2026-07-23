import "./PriceDetails.css";

function formatMoney(amount) {
  return `Rs. ${Math.round(amount).toLocaleString()}`;
}

function PriceDetails({
  nightlyPrice,
  nights,
  cleaningFee,
  serviceFee,
  taxes,
  servicePrice,
  serviceTax,
  discount,
  total,
}) {
  return (
    <div className="price-details">
      <h3 className="price-details-title">Price details</h3>

      <div className="price-row">
        <span>
          {formatMoney(nightlyPrice)} x {nights} night{nights > 1 ? "s" : ""}
        </span>
        <span>{formatMoney(nightlyPrice * nights)}</span>
      </div>

      <div className="price-row">
        <span>Cleaning fee</span>
        <span>{formatMoney(cleaningFee)}</span>
      </div>

      <div className="price-row">
        <span>Service fee</span>
        <span>{formatMoney(serviceFee)}</span>
      </div>

      <div className="price-row">
        <span>Taxes</span>
        <span>{formatMoney(taxes)}</span>
      </div>

      {servicePrice > 0 && (
        <>
          <div className="price-divider" />

          <div className="price-row">
            <span>Add-on service</span>
            <span>{formatMoney(servicePrice)}</span>
          </div>

          <div className="price-row">
            <span>Service tax</span>
            <span>{formatMoney(serviceTax)}</span>
          </div>
        </>
      )}

      {discount > 0 && (
        <div className="price-row price-row-discount">
          <span>Promo discount</span>
          <span>-{formatMoney(discount)}</span>
        </div>
      )}

      <div className="price-divider" />

      <div className="price-row price-row-total">
        <span>Total (PKR)</span>
        <span>{formatMoney(total)}</span>
      </div>
    </div>
  );
}

export default PriceDetails;