import { Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HostItemCard from "../../components/Host/HostItemCard";
import { useApp } from "../../context/AppContext";
import "./MyHomes.css";

function MyHomes() {
  const { myHomes, deleteHome } = useApp();

  function handleDelete(id, title) {
    if (window.confirm(`Delete "${title}"? This can't be undone.`)) {
      deleteHome(id);
    }
  }

  return (
    <HostPageLayout
      title="My Homes"
      subtitle="Homes you've listed. Edits and deletions apply instantly everywhere."
    >
      {myHomes.length === 0 ? (
        <div className="my-homes-empty">
          <p>You haven't listed any homes yet.</p>
          <Link to="/host/create-home" className="my-homes-empty-btn">
            + Create your first home
          </Link>
        </div>
      ) : (
        <div className="my-homes-grid">
          {myHomes.map((home) => (
            <HostItemCard
              key={home.id}
              image={home.images[0]}
              title={home.title}
              subtitle={`${home.city} · ${home.currency || "PKR"} ${home.price.toLocaleString()}`}
              editHref={`/host/edit-home/${home.id}`}
              previewHref={`/listing/${home.id}`}
              onDelete={() => handleDelete(home.id, home.title)}
            />
          ))}
        </div>
      )}
    </HostPageLayout>
  );
}

export default MyHomes;