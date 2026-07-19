import dummyListings from "../data/dummylisting";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Listingcard({ filterCity = "" }) {
  const visibleListings = filterCity
    ? dummyListings.filter((listing) => listing.city === filterCity)
    : dummyListings;

  // Group listings by city
  const groupedByCity = visibleListings.reduce((acc, listing) => {
    if (!acc[listing.city]) {
      acc[listing.city] = [];
    }

    acc[listing.city].push(listing);
    return acc;
  }, {});

  if (filterCity && visibleListings.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="listing-container">
          <p className="no-results-text">
            No homes found in {filterCity}. Try another destination.
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

                    <FaHeart className="heart-icon" />
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
                        ⭐ {listing.rating}
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