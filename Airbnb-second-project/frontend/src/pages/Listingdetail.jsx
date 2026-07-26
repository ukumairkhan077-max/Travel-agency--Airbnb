import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PropertyMap from "../components/Map/PropertyMap";
import { useApp } from "../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";

function Listingdetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { homes } = useApp();

    const listing = homes.find(
        (item) => item.id === Number(id)
    );

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [guestsError, setGuestsError] = useState("");

    if (!listing) {
        return <h2>Item not found</h2>;
    }

    const capacity = listing.maxGuests || 4;

    function handleGuestsChange(value) {
        const nextGuests = Math.max(1, Number(value) || 1);
        setGuests(nextGuests);
        setGuestsError(
            nextGuests > capacity
                ? `This home fits up to ${capacity} guests.`
                : ""
        );
    }

    function handleReserve() {
        if (guests > capacity) {
            setGuestsError(`This home fits up to ${capacity} guests.`);
            return;
        }

        // Reserve -> Booking Details -> Question -> (optional service) -> Confirm & Pay -> Thank you
        navigate(`/booking/${listing.id}/details`, {
            state: { checkIn, checkOut, guests },
        });
    }

    return (
        <>
            <Navbar variant="full" />

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

                        <p><strong>Rating:</strong> ⭐ {listing.rating || "New"}</p>

                        <p><strong>Host:</strong> {listing.host}</p>

                        <p><strong>Sleeps:</strong> up to {capacity} guests</p>
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
                            max={capacity}
                            value={guests}
                            onChange={(e) => handleGuestsChange(e.target.value)}
                        />
                        {guestsError && (
                            <p style={{ color: "#d93900", fontSize: "13px", margin: "-6px 0 10px" }}>
                                {guestsError}
                            </p>
                        )}

                        <button onClick={handleReserve}>
                            Reserve
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

                <PropertyMap
                    city={listing.city}
                    area={listing.location}
                    id={listing.id}
                    title={listing.title}
                />

            </div>
            <Footer/>
        </>
    );
}

export default Listingdetail;
