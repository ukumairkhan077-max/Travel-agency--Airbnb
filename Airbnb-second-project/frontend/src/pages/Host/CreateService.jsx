import { useNavigate } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import ServiceForm from "../../components/Host/ServiceForm";
import { useApp } from "../../context/AppContext";
import { generateServiceId } from "../../utils/idGenerator";

function CreateService() {
  const navigate = useNavigate();
  const { addService, currentHost } = useApp();

  function handleSubmit(serviceData) {
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

    addService(service);
    navigate("/host/my-services");
  }

  return (
    <HostPageLayout
      title="Create Service"
      subtitle="Publish a new service — it will appear on the Services page and its city section instantly."
    >
      <ServiceForm onSubmit={handleSubmit} submitLabel="Publish Service" />
    </HostPageLayout>
  );
}

export default CreateService;