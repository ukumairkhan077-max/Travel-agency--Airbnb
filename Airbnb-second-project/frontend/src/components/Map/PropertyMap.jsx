import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { getCoordinatesFor } from "../../utils/cityCoordinates";
import "leaflet/dist/leaflet.css";
import "./PropertyMap.css";

// Leaflet's default marker icon paths break under Vite's bundler unless we
// explicitly point them at the bundled asset URLs.
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
            <Marker position={[lat, lng]} icon={defaultIcon}>
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
