import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroService from "../components/HeroService";
import ServiceSidebar from "../components/ServiceSidebar";
import SubServiceModal from "../components/SubServiceModal";
import services from "../data/services";

function ServiceDetail() {
  const { id } = useParams();
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <>
        <Navbar variant="compact" searchType="services" />

        <div className="service-not-found">
          <h2>Service not found</h2>
          <Link to="/services">Back to Services</Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar variant="compact" searchType="services" />

      <div className="service-detail">
        <div className="service-detail-left">
          <HeroService service={service} />
        </div>

        <div className="service-detail-right">
          <ServiceSidebar
            hostName={service.provider.name}
            items={service.subServices}
            onSelectService={(index) => setActiveSubIndex(index)}
          />
        </div>
      </div>

      {activeSubIndex !== null && (
        <SubServiceModal
          subServices={service.subServices}
          activeIndex={activeSubIndex}
          onSelectIndex={setActiveSubIndex}
          onClose={() => setActiveSubIndex(null)}
        />
      )}

      <Footer />
    </>
  );
}

export default ServiceDetail;
