// Returns true if the requested [checkIn, checkOut) range does NOT overlap
// with any existing confirmed booking for this home.
export function isHomeAvailable(homeId, checkIn, checkOut, bookings) {
  if (!checkIn || !checkOut) return true; // no dates selected yet — don't filter

  const requestedStart = new Date(checkIn).getTime();
  const requestedEnd = new Date(checkOut).getTime();

  if (Number.isNaN(requestedStart) || Number.isNaN(requestedEnd)) return true;

  const conflicting = bookings.some((booking) => {
    if (booking.homeId !== homeId) return false;

    const bookedStart = new Date(booking.checkIn).getTime();
    const bookedEnd = new Date(booking.checkOut).getTime();

    if (Number.isNaN(bookedStart) || Number.isNaN(bookedEnd)) return false;

    // Overlap test: ranges overlap unless one ends before the other starts.
    return requestedStart < bookedEnd && bookedStart < requestedEnd;
  });

  return !conflicting;
}
