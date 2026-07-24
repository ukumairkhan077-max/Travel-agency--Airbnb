import { useParams, useNavigate, Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HomeForm from "../../components/Host/HomeForm";
import { useApp } from "../../context/AppContext";

function EditHome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myHomes, updateHome } = useApp();

  const home = myHomes.find((item) => item.id === Number(id));

  function handleSubmit(homeData) {
    updateHome(home.id, homeData);
    navigate("/host/my-homes");
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
      <HomeForm
        initialValues={home}
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
      />
    </HostPageLayout>
  );
}

export default EditHome;