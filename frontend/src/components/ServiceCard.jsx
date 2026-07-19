import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="service-link">
      <div className="service-card">
        <div className="service-image-container">
          <img
            src={service.heroImage}
            alt={service.title}
            className="service-image"
            loading="lazy"
          />

          {service.badge && (
            <span className="service-badge">{service.badge}</span>
          )}

          <FaHeart className="service-heart-icon" />
        </div>

        <div className="service-info">
          <div className="service-top-row">
            <h3>{service.title}</h3>

            {service.rating && (
              <span className="service-rating">
                <FaStar className="service-star-icon" />
                {service.rating.toFixed(2)}
              </span>
            )}
          </div>

          <p className="service-category">{service.category}</p>

          <p className="service-price">
            From ${service.priceFrom}{" "}
            <span className="service-price-unit">/ {service.priceUnit}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
