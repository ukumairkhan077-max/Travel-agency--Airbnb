import { Navigate } from "react-router-dom";
import Navbar from "../navbar";
import HostSidebar from "./HostSidebar";
import { useApp } from "../../context/AppContext";
import "./HostPageLayout.css";

function HostPageLayout({ title, subtitle, children }) {
  const { currentHost } = useApp();

  // Guard every /host/* page — only logged-in hosts may access them.
  if (!currentHost) {
    return <Navigate to="/become-host" replace />;
  }

  return (
    <>
      <Navbar variant="full" />

      <div className="host-page-layout">
        <HostSidebar />

        <main className="host-page-content">
          {(title || subtitle) && (
            <div className="host-page-header">
              {title && <h1>{title}</h1>}
              {subtitle && <p>{subtitle}</p>}
            </div>
          )}

          {children}
        </main>
      </div>
    </>
  );
}

export default HostPageLayout;