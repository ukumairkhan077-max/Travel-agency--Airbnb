import { useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroService from "../components/HeroService";
import ServiceSidebar from "../components/ServiceSidebar";
import SubServiceModal from "../components/SubServiceModal";
import { useApp } from "../context/AppContext";

function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { services } = useApp();
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const service = services.find((item) => item.id === id);

  // If we arrived here from the "Do you want to add a service?" question
  // page, this carries the in-progress home booking so we can attach this
  // service to it and jump straight to Confirm & Pay.
  const bookingDraft = location.state?.bookingMode ? location.state : null;

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

  function handleAddService() {
    navigate(`/confirm-pay/${bookingDraft.homeId}`, {
      state: {
        checkIn: bookingDraft.checkIn,
        checkOut: bookingDraft.checkOut,
        guests: bookingDraft.guests,
        selectedService: {
          id: service.id,
          title: service.title,
          image: service.heroImage,
          price: service.priceFrom,
          priceUnit: service.priceUnit,
        },
      },
    });
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

      {bookingDraft && (
        <div className="add-service-bar">
          <div className="add-service-bar-inner">
            <div className="add-service-bar-info">
              <p className="add-service-bar-title">{service.title}</p>
              <p className="add-service-bar-price">
                From ${service.priceFrom} / {service.priceUnit}
              </p>
            </div>

            <button
              type="button"
              className="add-service-bar-btn"
              onClick={handleAddService}
            >
              Add Service
            </button>
          </div>
        </div>
      )}

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