import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import "./HostItemCard.css";

function HostItemCard({
  image,
  title,
  subtitle,
  price,
  editHref,
  previewHref,
  onDelete,
}) {
  return (
    <div className="host-item-card">
      <img src={image} alt={title} className="host-item-card-image" />

      <div className="host-item-card-body">
        <h3>{title}</h3>
        <p className="host-item-card-subtitle">{subtitle}</p>
        {price && <p className="host-item-card-price">{price}</p>}
      </div>

      <div className="host-item-card-actions">
        <Link to={previewHref} className="host-item-card-btn" target="_blank">
          <FaEye /> Preview
        </Link>

        <Link to={editHref} className="host-item-card-btn">
          <FaEdit /> Edit
        </Link>

        <button
          type="button"
          className="host-item-card-btn host-item-card-btn-danger"
          onClick={onDelete}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default HostItemCard;