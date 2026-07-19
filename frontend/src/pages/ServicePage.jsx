import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

function ServicePage() {
  // Group services by category, mirroring how Listingcard groups by city
  const groupedByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }

    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <>
      <Navbar />

      <div className="service-page-wrapper">
        <div className="service-page-header">
          <h1>Services</h1>
          <p>Book unique experiences hosted by local experts.</p>
        </div>

        {Object.entries(groupedByCategory).map(([category, items]) => (
          <div className="listing-container" key={category}>
            <h2 className="listing-heading">{category}</h2>

            <div className="service-grid">
              {items.map((service) => (
                <ServiceCard service={service} key={service.id} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ServicePage;
