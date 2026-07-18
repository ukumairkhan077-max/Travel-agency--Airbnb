import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/reserve.css";

import LoginCard from "../components/LoginCard";
import PaymentCard from "../components/PaymentCard";
import ReviewCard from "../components/ReviewCard";
import BookingSummary from "../components/BookingSummary";

const Reserve = () => {

    const { state } = useLocation();

    // Default data if user visits directly
    const property = state?.property || {
        title: "Aurora Retreat | 1BHK",
        location: "Islamabad, Pakistan",
        rating: 4.9,
        reviews: 87,
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        price: 65,
    };

    const booking = {
        checkIn: state?.checkIn || "24 Jul 2026",
        checkOut: state?.checkOut || "26 Jul 2026",
        guests: state?.guests || 1,
    };

    return (
        <div className="reserve-page">

            <div className="reserve-container">

                {/* LEFT */}

                <div className="reserve-left">

                    <h1>Confirm and Reserve</h1>

                    <LoginCard />

                    <PaymentCard />

                    <ReviewCard />

                </div>

                {/* RIGHT */}

                <div className="reserve-right">

                    <BookingSummary
                        property={property}
                        booking={booking}
                    />

                </div>

            </div>

        </div>
    );
};

export default Reserve;