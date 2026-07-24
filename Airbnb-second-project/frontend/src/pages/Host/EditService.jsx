import { useParams, useNavigate, Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import ServiceForm from "../../components/Host/ServiceForm";
import { useApp } from "../../context/AppContext";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myServices, updateService } = useApp();

  const service = myServices.find((item) => item.id === id);

  function handleSubmit(serviceData) {
    updateService(service.id, serviceData);
    navigate("/host/my-services");
  }

  if (!service) {
    return (
      <HostPageLayout title="Edit Service">
        <p>
          That service wasn't found, or you don't have permission to edit
          it. <Link to="/host/my-services">Back to My Services</Link>
        </p>
      </HostPageLayout>
    );
  }

  return (
    <HostPageLayout
      title="Edit Service"
      subtitle="Changes are reflected on the Services page, search, and detail page instantly."
    >
      <ServiceForm
        initialValues={service}
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
      />
    </HostPageLayout>
  );
}

export default EditService;