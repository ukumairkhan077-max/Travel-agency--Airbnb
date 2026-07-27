import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import ServiceForm from "../../components/Host/ServiceForm";
import { useApp } from "../../context/AppContext";
import { generateServiceId } from "../../utils/idGenerator";

function CreateService() {
  const navigate = useNavigate();
  const { addService, currentHost } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(serviceData) {
    const service = {
      id: generateServiceId(serviceData.title),
      ...serviceData,
      rating: 0,
      reviewCount: 0,
      reviews: [],
      badge: null,
      hostId: currentHost.id,
      createdAt: new Date().toISOString(),
    };

    setError("");
    setIsSubmitting(true);

    try {
      await addService(service);
      navigate("/host/my-services");
    } catch (err) {
      setError(err.message || "Couldn't publish this service. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <HostPageLayout
      title="Create Service"
      subtitle="Publish a new service — it will appear on the Services page and its city section instantly."
    >
      {error && <p className="host-form-page-error">{error}</p>}

      <ServiceForm
        onSubmit={handleSubmit}
        submitLabel="Publish Service"
        isSubmitting={isSubmitting}
      />
    </HostPageLayout>
  );
}

export default CreateService;
