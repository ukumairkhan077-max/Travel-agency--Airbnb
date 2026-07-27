import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import ServiceForm from "../../components/Host/ServiceForm";
import { useApp } from "../../context/AppContext";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myServices, updateService } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const service = myServices.find((item) => item.id === id);

  async function handleSubmit(serviceData) {
    setError("");
    setIsSubmitting(true);

    try {
      await updateService(service.id, serviceData);
      navigate("/host/my-services");
    } catch (err) {
      setError(err.message || "Couldn't save these changes. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      {error && <p className="host-form-page-error">{error}</p>}

      <ServiceForm
        initialValues={service}
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
        isSubmitting={isSubmitting}
      />
    </HostPageLayout>
  );
}

export default EditService;
