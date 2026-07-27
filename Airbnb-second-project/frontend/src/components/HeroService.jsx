import { FaStar, FaShareAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import PropertyMap from "./Map/PropertyMap";

function HeroService({ service }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSaved, toggleWishlist } = useWishlist();

  const {
    id,
    title,
    tagline,
    heroImage,
    rating,
    reviewCount,
    priceFrom,
    priceUnit,
    cancellationPolicy,
    provider,
    location,
  } = service;

  const saved = isSaved("service", id);

  async function handleSaveClick() {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/services/${id}` } });
      return;
    }

    try {
      await toggleWishlist("service", id, {
        title,
        subtitle: `${location.city} · ${service.category}`,
        image: heroImage,
      });
    } catch (error) {
      console.error("Couldn't update wishlist:", error);
    }
  }

  async function handleShareClick() {
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch {
        // User cancelled the share sheet — no action needed.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      window.alert("Link copied to clipboard!");
    } catch {
      window.prompt("Copy this link:", shareUrl);
    }
  }

  function handleShowDates() {
    document
      .getElementById("service-subservices")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="hero-service">
      <div className="hero-service-image-wrap">
        <img src={heroImage} alt={title} className="hero-service-image" />

        <div className="hero-service-actions">
          <button
            className="hero-action-btn"
            type="button"
            onClick={handleShareClick}
          >
            <FaShareAlt />
            <span>Share</span>
          </button>

          <button
            className="hero-action-btn"
            type="button"
            onClick={handleSaveClick}
          >
            {saved ? <FaHeart className="favorited" /> : <FaRegHeart />}
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="hero-service-host">
        <img
          src={provider.avatar}
          alt={provider.name}
          className="hero-service-avatar"
        />

        <div>
          <h1 className="hero-service-title">{title}</h1>
          <p className="hero-service-hosted-by">Hosted by {provider.name}</p>
        </div>
      </div>

      {rating && (
        <div className="hero-service-rating">
          <FaStar className="hero-service-star" />
          <span>{rating.toFixed(2)}</span>
          <span className="hero-service-review-count">
            ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
          </span>
        </div>
      )}

      <p className="hero-service-description">{tagline}</p>

      <div className="hero-service-host-info">
        <h3>Meet your host</h3>
        <p className="hero-service-host-title">{provider.title}</p>
        <p>{provider.experienceSummary}</p>
        {provider.careerHighlight && <p>{provider.careerHighlight}</p>}
        {provider.education && (
          <p className="hero-service-host-edu">{provider.education}</p>
        )}
      </div>

      <div className="hero-service-cancellation">
        <BsShieldCheck className="hero-service-shield" />
        <div>
          <h4>Free cancellation</h4>
          <p>{cancellationPolicy}</p>
        </div>
      </div>

      {location && (
        <PropertyMap
          city={location.city}
          area={location.area}
          id={id}
          title={title}
        />
      )}

      <div className="hero-service-booking">
        <div className="hero-service-price">
          <span className="hero-service-price-amount">${priceFrom}</span>
          <span className="hero-service-price-unit">/ {priceUnit}</span>
        </div>

        <button
          className="hero-service-reserve-btn"
          type="button"
          onClick={handleShowDates}
        >
          Show dates
        </button>
      </div>
    </div>
  );
}

export default HeroService;
