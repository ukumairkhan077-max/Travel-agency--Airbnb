import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Listingcard from "../components/Listingcard";
import FilterBar from "../components/Filters/FilterBar";
import { homeAmenities, homePriceBounds } from "../data/searchConfig";

function Listing() {
  const [filterCity, setFilterCity] = useState("");
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

  const [filters, setFilters] = useState({
    minPrice: homePriceBounds.min,
    maxPrice: homePriceBounds.max,
    amenities: [],
    guests: 1,
  });

  return (
    <>
      <Navbar variant="full" />

      <div className="listing-page-body">
        <FilterBar
          mode="homes"
          filters={filters}
          onChange={setFilters}
          priceBounds={homePriceBounds}
          amenitiesList={homeAmenities}
          showLocation
          city={filterCity}
          onCityChange={setFilterCity}
          showDates
          checkIn={dates.checkIn}
          checkOut={dates.checkOut}
          onDatesChange={(checkIn, checkOut) => setDates({ checkIn, checkOut })}
        />

        <div className="listing-page-results">
          <Listingcard
            filterCity={filterCity}
            filters={{ ...filters, ...dates }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Listing;