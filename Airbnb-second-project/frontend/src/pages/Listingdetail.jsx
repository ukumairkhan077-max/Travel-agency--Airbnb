import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import dummyListings from "../data/dummylisting";
import { useParams, useNavigate } from "react-router-dom";

function Listingdetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const listing = dummyListings.find(
        (item) => item.id === Number(id)
    );

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);

    if (!listing) {
        return <h2>Item not found</h2>;
    }

    function handleCheckAvailability() {
        navigate(`/confirm-pay/${listing.id}`, {
            state: { checkIn, checkOut, guests },
        });
    }

    return (
        <>
            <Navbar variant="compact" searchType="stays" />

            <div className="listing-detail">

                <h1>{listing.title}</h1>

                <div id="image-container">

                    {/* Hero Image */}
                    <div id="hero-image">
                        <img
                            src={listing.images[0]}
                            alt={listing.title}
                        />
                    </div>

                    {/* Remaining Images */}
                    <div id="other-images">
                        {listing.images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${listing.title} ${index + 2}`}
                            />
                        ))}
                    </div>

                </div>

                <p>
                    <strong>{listing.description}</strong>
                </p>

                <div id="under-images">

                    <div id="detail">
                        <p><strong>Price:</strong> ${listing.price}</p>

                        <p><strong>Rating:</strong> ⭐ {listing.rating}</p>

                        <p><strong>Host:</strong> {listing.host}</p>
                    </div>

                    <div id="reservation">

                        <h3>${listing.price} / night</h3>

                        <label>Check In</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />

                        <label>Check Out</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />

                        <label>Guests</label>
                        <input
                            type="number"
                            min={1}
                            max={16}
                            value={guests}
                            onChange={(e) =>
                                setGuests(Math.max(1, Number(e.target.value) || 1))
                            }
                        />

                        <button onClick={handleCheckAvailability}>
                            Check Availability
                        </button>

                    </div>

                </div>

                <div id="offer">

                    <h2>What this place offers</h2>

                    <div className="amenities">

                        {listing.amenities.map((item, index) => (
                            <p key={index}>✔ {item}</p>
                        ))}

                    </div>

                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Listingdetail;