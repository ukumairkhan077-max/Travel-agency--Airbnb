import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import { getCoordinatesFor } from "../../utils/cityCoordinates";
import "leaflet/dist/leaflet.css";
import "./PropertyMap.css";

// Leaflet's default marker icon relies on bundler-specific asset paths that
// break inconsistently across setups. We avoid that entirely by building a
// small inline SVG pin instead of importing Leaflet's raster PNG icons.
const pinIcon = L.divIcon({
  className: "property-map-pin",
  html: `
    <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0C6.7 0 0 6.7 0 15c0 11.25 15 25 15 25s15-13.75 15-25C30 6.7 23.3 0 15 0z" fill="#ff385c"/>
      <circle cx="15" cy="15" r="6" fill="#ffffff"/>
    </svg>
  `,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -36],
});

/**
 * PropertyMap
 *
 * Props:
 *  - city, area, id: used to derive a stable approximate pin location
 *  - title: shown in the marker popup
 *  - approximate: if true (default), shows a shaded radius instead of an
 *    exact pin — matches Airbnb's "approximate location until booked" pattern
 */
function PropertyMap({ city, area, id, title, approximate = true }) {
  const { lat, lng } = getCoordinatesFor(city, id);

  return (
    <div className="property-map-wrap">
      <h2 className="property-map-heading">Where you'll be</h2>
      <p className="property-map-subheading">
        {area ? `${area}, ${city}` : city}
      </p>

      <div className="property-map-container">
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="property-map-leaflet"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {approximate ? (
            <Circle
              center={[lat, lng]}
              radius={900}
              pathOptions={{
                color: "#ff385c",
                fillColor: "#ff385c",
                fillOpacity: 0.2,
              }}
            />
          ) : (
            <Marker position={[lat, lng]} icon={pinIcon}>
              <Popup>{title}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {approximate && (
        <p className="property-map-note">
          Exact location provided after booking, for your Host's privacy.
        </p>
      )}
    </div>
  );
}

export default PropertyMap;