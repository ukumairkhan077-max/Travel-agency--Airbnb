import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { isHomeAvailable } from "../utils/availability";

function Listingcard({ filterCity = "", filters = null }) {
  const { homes, bookings } = useApp();
  const { isAuthenticated } = useAuth();
  const { isSaved, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  const visibleListings = homes.filter((listing) => {
    if (filterCity && listing.city !== filterCity) return false;

    if (filters) {
      if (listing.price < filters.minPrice || listing.price > filters.maxPrice) {
        return false;
      }

      const capacity = listing.maxGuests || 4;
      if (filters.guests > capacity) return false;

      if (
        filters.amenities.length > 0 &&
        !filters.amenities.every((amenity) => listing.amenities.includes(amenity))
      ) {
        return false;
      }

      if (
        (filters.checkIn || filters.checkOut) &&
        !isHomeAvailable(listing.id, filters.checkIn, filters.checkOut, bookings)
      ) {
        return false;
      }
    }

    return true;
  });

  // Group listings by city
  const groupedByCity = visibleListings.reduce((acc, listing) => {
    if (!acc[listing.city]) {
      acc[listing.city] = [];
    }

    acc[listing.city].push(listing);
    return acc;
  }, {});

  async function handleHeartClick(e, listing) {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/listings" } });
      return;
    }

    try {
      await toggleWishlist("home", listing.id, {
        title: listing.title,
        subtitle: listing.location,
        image: listing.images[0],
      });
    } catch (error) {
      console.error("Couldn't update wishlist:", error);
    }
  }

  if (visibleListings.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="listing-container">
          <p className="no-results-text">
            No homes match your search. Try adjusting your filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {Object.entries(groupedByCity).map(([city, listings]) => (
        <div className="listing-container" key={city}>
          <h2 className="listing-heading">
            Popular homes in {city}
          </h2>

          <div className="listing-grid">
            {listings.map((listing) => (
              <Link
                to={`/listing/${listing.id}`}
                className="listing-link"
                key={listing.id}
              >
                <div className="listing-card">
                  <div className="image-container">
                    <img
                      src={listing.images[0]}
                      alt={listing.title}
                      className="listing-image"
                      loading="lazy"
                    />

                    <span className="favorite-tag">
                      Guest Favorite
                    </span>

                    <button
                      type="button"
                      className="heart-btn"
                      onClick={(e) => handleHeartClick(e, listing)}
                      aria-label="Save to wishlist"
                    >
                      {isSaved("home", listing.id) ? (
                        <FaHeart className="heart-icon heart-icon-active" />
                      ) : (
                        <FaRegHeart className="heart-icon" />
                      )}
                    </button>
                  </div>

                  <div className="listing-info">
                    <h3>{listing.title}</h3>

                    <p className="location">
                      {listing.location}
                    </p>

                    <div className="bottom-row">
                      <span className="price">
                        Rs. {listing.price.toLocaleString()}
                      </span>

                      <span className="rating">
                        ⭐ {listing.rating || "New"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listingcard;
