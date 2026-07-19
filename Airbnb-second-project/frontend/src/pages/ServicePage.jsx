import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceRow from "../components/ServiceRow";
import services from "../data/services";

function ServicePage() {
  const [filters, setFilters] = useState({ location: "", category: "" });

  function handleSearch({ location, category }) {
    setFilters({ location: location || "", category: category || "" });
  }

  const filteredServices = services.filter((service) => {
    const matchesCity = filters.location
      ? service.location.city === filters.location
      : true;
    const matchesCategory = filters.category
      ? service.category === filters.category
      : true;
    return matchesCity && matchesCategory;
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
      <Navbar variant="compact" searchType="services" onSearch={handleSearch} />

      <div className="service-page-wrapper">
        <div className="service-page-header">
          <h1>Discover services on Airbnb</h1>
          <p>Book unique experiences hosted by local experts.</p>
        </div>

        {cityEntries.length === 0 && (
          <p className="no-results-text">
            No services match your search. Try a different city or service.
          </p>
        )}

        {cityEntries.map(([city, items]) => (
          <ServiceRow city={city} items={items} key={city} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ServicePage;
