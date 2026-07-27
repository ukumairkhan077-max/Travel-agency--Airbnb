import { useState } from "react";
import { Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HostItemCard from "../../components/Host/HostItemCard";
import { useApp } from "../../context/AppContext";
import "./MyServices.css";

function MyServices() {
  const { myServices, deleteService } = useApp();
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  async function handleDelete(id, title) {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;

    setError("");
    setDeletingId(id);

    try {
      await deleteService(id);
    } catch (err) {
      setError(err.message || "Couldn't delete this service. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <HostPageLayout
      title="My Services"
      subtitle="Services you've published. Edits and deletions apply instantly everywhere."
    >
      {error && <p className="host-form-page-error">{error}</p>}

      {myServices.length === 0 ? (
        <div className="my-services-empty">
          <p>You haven't published any services yet.</p>
          <Link to="/host/create-service" className="my-services-empty-btn">
            + Create your first service
          </Link>
        </div>
      ) : (
        <div className="my-services-grid">
          {myServices.map((service) => (
            <HostItemCard
              key={service.id}
              image={service.heroImage}
              title={service.title}
              subtitle={`${service.location.city} · ${service.category}`}
              price={`From $${service.priceFrom} / ${service.priceUnit}`}
              editHref={`/host/edit-service/${service.id}`}
              previewHref={`/services/${service.id}`}
              onDelete={() => handleDelete(service.id, service.title)}
              isDeleting={deletingId === service.id}
            />
          ))}
        </div>
      )}
    </HostPageLayout>
  );
}

export default MyServices;
