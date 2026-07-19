import React from "react";

const BookingSummary = ({ property, booking }) => {

    const nights = 2;

    const cleaningFee = 10;

    const serviceFee = 5;

    const subtotal = property.price * nights;

    const total = subtotal + cleaningFee + serviceFee;

    return (

        <div className="booking-card">

            <div className="booking-house">

                <img
                    src={property.image}
                    alt={property.title}
                />

                <div>

                    <h3>{property.title}</h3>

                    <p>{property.location}</p>

                    <span>
                        ⭐ {property.rating} ({property.reviews}) • Superhost
                    </span>

                </div>

            </div>

            <hr />

            <div className="booking-section">

                <h4>Dates</h4>

                <p>
                    {booking.checkIn} - {booking.checkOut}
                </p>

            </div>

            <hr />

            <div className="booking-section">

                <h4>Guests</h4>

                <p>{booking.guests} Guest</p>

            </div>

            <hr />

            <div className="booking-section">

                <h4>Price Details</h4>

                <div className="price-row">
                    <span>
                        ${property.price} × {nights} nights
                    </span>

                    <span>${subtotal}</span>
                </div>

                <div className="price-row">
                    <span>Cleaning Fee</span>

                    <span>${cleaningFee}</span>
                </div>

                <div className="price-row">
                    <span>Service Fee</span>

                    <span>${serviceFee}</span>
                </div>

            </div>

            <hr />

            <div className="price-total">

                <h3>Total</h3>

                <h3>${total}</h3>

            </div>

        </div>

    );
};

export default BookingSummary;