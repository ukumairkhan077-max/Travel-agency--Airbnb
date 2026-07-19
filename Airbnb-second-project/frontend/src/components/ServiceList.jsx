import { Link } from "react-router-dom";
import dummyListings from "../data/dummylisting";

// Sub-services use string ids (e.g. "nervous-system-reset") that don't
// exist in dummyListings (numeric ids 1-100). This deterministically maps
// each sub-service to one of the existing listings so every related card
// always resolves to a real page on your existing ListingDetail route,
// exactly like listing cards do on the Home page.
function hashToListingId(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return (hash % dummyListings.length) + 1;
}

function ServiceList({ items }) {
  return (
    <div className="service-list">
      {items.map((item) => (
        <Link
          to={`/listing/${hashToListingId(item.id)}`}
          className="service-list-link"
          key={item.id}
        >
          <div className="service-list-card">
            <div className="service-list-image-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="service-list-image"
                loading="lazy"
              />
            </div>

            <div className="service-list-info">
              <h4>{item.title}</h4>
              <p className="service-list-description">{item.description}</p>

              <div className="service-list-bottom-row">
                <span className="service-list-duration">{item.duration}</span>

                {item.price && (
                  <span className="service-list-price">
                    ${item.price} / {item.priceUnit}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceList;
