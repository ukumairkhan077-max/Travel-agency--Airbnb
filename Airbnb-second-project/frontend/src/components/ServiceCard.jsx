import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";

function ServiceCard({ service }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSaved, toggleWishlist } = useWishlist();

  async function handleHeartClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/services" } });
      return;
    }

    try {
      await toggleWishlist("service", service.id, {
        title: service.title,
        subtitle: `${service.location.city} · ${service.category}`,
        image: service.heroImage,
      });
    } catch (error) {
      console.error("Couldn't update wishlist:", error);
    }
  }

  return (
    <Link
      to={`/services/${service.id}`}
      className="service-link"
      state={location.state}
    >
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

          <button
            type="button"
            className="service-heart-btn"
            onClick={handleHeartClick}
            aria-label="Save to wishlist"
          >
            {isSaved("service", service.id) ? (
              <FaHeart className="service-heart-icon service-heart-icon-active" />
            ) : (
              <FaRegHeart className="service-heart-icon" />
            )}
          </button>
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

          <p className="service-price">
            From ${service.priceFrom}{" "}
            <span className="service-price-unit">/ {service.priceUnit}</span>
          </p>

          {service.minimumToBook && (
            <p className="service-minimum">
              Minimum ${service.minimumToBook} to book
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
