import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HomeForm from "../../components/Host/HomeForm";
import { useApp } from "../../context/AppContext";

function EditHome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myHomes, updateHome } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const home = myHomes.find((item) => String(item.id) === String(id));

  async function handleSubmit(homeData) {
    setError("");
    setIsSubmitting(true);

    try {
      await updateHome(home.id, homeData);
      navigate("/host/my-homes");
    } catch (err) {
      setError(err.message || "Couldn't save these changes. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!home) {
    return (
      <HostPageLayout title="Edit Home">
        <p>
          That home wasn't found, or you don't have permission to edit it.{" "}
          <Link to="/host/my-homes">Back to My Homes</Link>
        </p>
      </HostPageLayout>
    );
  }

  return (
    <HostPageLayout
      title="Edit Home"
      subtitle="Changes are reflected on the Home page, All Listings, and the listing detail page instantly."
    >
      {error && <p className="host-form-page-error">{error}</p>}

      <HomeForm
        initialValues={home}
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
        isSubmitting={isSubmitting}
      />
    </HostPageLayout>
  );
}

export default EditHome;
