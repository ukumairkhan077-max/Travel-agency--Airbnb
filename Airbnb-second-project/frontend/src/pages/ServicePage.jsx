import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceRow from "../components/ServiceRow";
import FilterBar from "../components/Filters/FilterBar";
import { useApp } from "../context/AppContext";
import { servicePriceBounds } from "../data/searchConfig";

function ServicePage() {
  const { services } = useApp();
  const [searchFilters, setSearchFilters] = useState({ location: "", category: "" });

  const [filters, setFilters] = useState({
    minPrice: servicePriceBounds.min,
    maxPrice: servicePriceBounds.max,
    amenities: [], // unused in services mode, kept for FilterBar's shared shape
    guests: 1,
  });

  function handleSearch({ location, category, guests }) {
    setSearchFilters({ location: location || "", category: category || "" });
    setFilters((prev) => ({
      ...prev,
      guests: guests?.adults ? guests.adults + guests.children : prev.guests,
    }));
  }

  const filteredServices = services.filter((service) => {
    const matchesCity = searchFilters.location
      ? service.location.city === searchFilters.location
      : true;
    const matchesCategory = searchFilters.category
      ? service.category === searchFilters.category
      : true;
    const matchesPrice =
      service.priceFrom >= filters.minPrice && service.priceFrom <= filters.maxPrice;
    const matchesGuests = service.guestRequirements
      ? filters.guests >= (service.guestRequirements.minGuests || 1) &&
        filters.guests <= (service.guestRequirements.maxGuests || 99)
      : true;

    return matchesCity && matchesCategory && matchesPrice && matchesGuests;
  });

  // Group services by city, mirroring "Services in London" from the reference design
  const groupedByCity = filteredServices.reduce((acc, service) => {
    const city = service.location.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(service);
    return acc;
  }, {});

  const cityEntries = Object.entries(groupedByCity);

  return (
    <>
      <Navbar variant="full" searchType="services" onSearch={handleSearch} />

      <div className="service-page-body">
        <FilterBar
          mode="services"
          filters={filters}
          onChange={setFilters}
          priceBounds={servicePriceBounds}
        />

        <div className="service-page-wrapper">
          <div className="service-page-header">
            <h1>Discover services on Airbnb</h1>
            <p>Book unique experiences hosted by local experts.</p>
          </div>

          {cityEntries.length === 0 && (
            <p className="no-results-text">
              No services match your search. Try adjusting your filters.
            </p>
          )}

          {cityEntries.map(([city, items]) => (
            <ServiceRow city={city} items={items} key={city} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ServicePage;
