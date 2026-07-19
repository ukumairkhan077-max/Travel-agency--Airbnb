import ServiceList from "./ServiceList";

function ServiceSidebar({ hostName, items, onSelectService }) {
  return (
    <div className="service-sidebar">
      <h2 className="service-sidebar-heading">
        More services from {hostName}
      </h2>

      <ServiceList items={items} onSelect={onSelectService} />
    </div>
  );
}

export default ServiceSidebar;
