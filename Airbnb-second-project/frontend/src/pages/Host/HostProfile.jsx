import HostPageLayout from "../../components/Host/HostPageLayout";
import { useApp } from "../../context/AppContext";
import "./HostProfile.css";

function HostProfile() {
  const { currentHost } = useApp();

  const fields = [
    { label: "Full Name", value: currentHost?.fullName },
    { label: "Email", value: currentHost?.email },
    { label: "Phone Number", value: currentHost?.phone },
    { label: "CNIC", value: currentHost?.cnic },
    { label: "City", value: currentHost?.city },
    { label: "Address", value: currentHost?.address },
  ];

  return (
    <HostPageLayout title="Profile" subtitle="Your hosting account details.">
      <div className="host-profile-card">
        <div className="host-profile-avatar">
          {(currentHost?.fullName || "H").charAt(0).toUpperCase()}
        </div>

        <div className="host-profile-fields">
          {fields.map((field) => (
            <div className="host-profile-field" key={field.label}>
              <span className="host-profile-label">{field.label}</span>
              <span className="host-profile-value">
                {field.value || "—"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </HostPageLayout>
  );
}

export default HostProfile;