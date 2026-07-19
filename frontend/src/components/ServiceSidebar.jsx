import ServiceList from "./ServiceList";

function ServiceSidebar({ hostName, items }) {
  return (
    <div className="service-sidebar">
      <h2 className="service-sidebar-heading">
        More services from {hostName}
      </h2>

      <ServiceList items={items} />
    </div>
  );
}

export default ServiceSidebar;
