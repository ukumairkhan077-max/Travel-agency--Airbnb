import { useNavigate } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HomeForm from "../../components/Host/HomeForm";
import { useApp } from "../../context/AppContext";
import { generateNumericId } from "../../utils/idGenerator";

function CreateHome() {
  const navigate = useNavigate();
  const { addHome, currentHost } = useApp();

  function handleSubmit(homeData) {
    const home = {
      id: generateNumericId(),
      ...homeData,
      rating: 0,
      reviews: [],
      bookings: [],
      hostId: currentHost.id,
      createdAt: new Date().toISOString(),
    };

    addHome(home);
    navigate("/host/my-homes");
  }

  return (
    <HostPageLayout
      title="Create Home"
      subtitle="Publish a new home — it will appear on the Home page, All Listings, and its city section instantly."
    >
      <HomeForm onSubmit={handleSubmit} submitLabel="Publish Home" />
    </HostPageLayout>
  );
}

export default CreateHome;