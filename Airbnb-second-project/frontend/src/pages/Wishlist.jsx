import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useWishlist } from "../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { items, toggleWishlist } = useWishlist();

  const homes = items.filter((item) => item.type === "home");
  const services = items.filter((item) => item.type === "service");

  async function handleRemove(type, id) {
    try {
      await toggleWishlist(type, id);
    } catch (error) {
      console.error("Couldn't update wishlist:", error);
    }
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="wishlist-page">
        <h1>Wishlist</h1>

        {items.length === 0 ? (
          <div className="wishlist-empty">
            <p>No saved homes or services yet. Tap the heart on any listing to save it here.</p>
            <Link to="/listings" className="wishlist-empty-btn">
              Browse homes
            </Link>
          </div>
        ) : (
          <>
            {homes.length > 0 && (
              <section className="wishlist-section">
                <h2>Homes</h2>
                <div className="wishlist-grid">
                  {homes.map((item) => (
                    <div className="wishlist-card" key={`home-${item.id}`}>
                      <Link to={`/listing/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                      <button
                        type="button"
                        className="wishlist-remove-btn"
                        onClick={() => handleRemove("home", item.id)}
                        aria-label="Remove from wishlist"
                      >
                        <FaHeart />
                      </button>
                      <div className="wishlist-card-body">
                        <Link to={`/listing/${item.id}`}>
                          <h3>{item.title}</h3>
                        </Link>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {services.length > 0 && (
              <section className="wishlist-section">
                <h2>Services</h2>
                <div className="wishlist-grid">
                  {services.map((item) => (
                    <div className="wishlist-card" key={`service-${item.id}`}>
                      <Link to={`/services/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                      <button
                        type="button"
                        className="wishlist-remove-btn"
                        onClick={() => handleRemove("service", item.id)}
                        aria-label="Remove from wishlist"
                      >
                        <FaHeart />
                      </button>
                      <div className="wishlist-card-body">
                        <Link to={`/services/${item.id}`}>
                          <h3>{item.title}</h3>
                        </Link>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;
