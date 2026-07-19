function ServiceList({ items, onSelect }) {
  return (
    <div className="service-list">
      {items.map((item, index) => (
        <div
          className="service-list-card"
          key={item.id}
          onClick={() => onSelect(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSelect(index);
          }}
        >
          <div className="service-list-image-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="service-list-image"
              loading="lazy"
            />
          </div>

          <div className="service-list-info">
            <h4>{item.title}</h4>
            <p className="service-list-description">{item.description}</p>

            <div className="service-list-bottom-row">
              <span className="service-list-duration">{item.duration}</span>

              {item.price && (
                <span className="service-list-price">
                  ${item.price} / {item.priceUnit}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
