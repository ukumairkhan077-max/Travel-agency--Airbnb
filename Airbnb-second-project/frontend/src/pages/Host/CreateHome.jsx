import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HomeForm from "../../components/Host/HomeForm";
import { useApp } from "../../context/AppContext";
import { generateNumericId } from "../../utils/idGenerator";

function CreateHome() {
  const navigate = useNavigate();
  const { addHome, currentHost } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(homeData) {
    const home = {
      id: generateNumericId(),
      ...homeData,
      rating: 0,
      reviews: [],
      bookings: [],
      hostId: currentHost.id,
      createdAt: new Date().toISOString(),
    };

    setError("");
    setIsSubmitting(true);

    try {
      await addHome(home);
      navigate("/host/my-homes");
    } catch (err) {
      setError(err.message || "Couldn't publish this home. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <HostPageLayout
      title="Create Home"
      subtitle="Publish a new home — it will appear on the Home page, All Listings, and its city section instantly."
    >
      {error && <p className="host-form-page-error">{error}</p>}

      <HomeForm
        onSubmit={handleSubmit}
        submitLabel="Publish Home"
        isSubmitting={isSubmitting}
      />
    </HostPageLayout>
  );
}

export default CreateHome;
