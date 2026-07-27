import { useState } from "react";
import { Link } from "react-router-dom";
import HostPageLayout from "../../components/Host/HostPageLayout";
import HostItemCard from "../../components/Host/HostItemCard";
import { useApp } from "../../context/AppContext";
import "./MyHomes.css";

function MyHomes() {
  const { myHomes, deleteHome } = useApp();
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  async function handleDelete(id, title) {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;

    setError("");
    setDeletingId(id);

    try {
      await deleteHome(id);
    } catch (err) {
      setError(err.message || "Couldn't delete this home. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <HostPageLayout
      title="My Homes"
      subtitle="Homes you've listed. Edits and deletions apply instantly everywhere."
    >
      {error && <p className="host-form-page-error">{error}</p>}

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
              isDeleting={deletingId === home.id}
            />
          ))}
        </div>
      )}
    </HostPageLayout>
  );
}

export default MyHomes;
