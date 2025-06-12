import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const pins = [
    { id: 1, position: [35.5138, 24.0180], label: "Group Cooking" },
    { id: 2, position: [35.1922, 24.9181], label: "Pottery Class" },
    { id: 3, position: [35.2995, 24.8915], label: "Axos Village" },
    { id: 4, position: [35.5122, 24.1156], label: "Cretan Crafts" },
    { id: 5, position: [35.3387, 25.1442], label: "Create Your Dish" },
    { id: 6, position: [35.5538, 24.1180], label: "Make Your Jewelry" },
    { id: 7, position: [35.5138, 24.1180], label: "Chania Summer Festival" },
    { id: 8, position: [35.3400, 25.1300], label: "Cretan Diet Festival" },
    { id: 9, position: [35.3200, 25.1200], label: "Cretan Beaches" },
    { id: 10, position: [35.3600, 24.0100], label: "Glass Blowing" },
  ];

  return (
    <MapContainer
      center={[35.3075, 25.0818]}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((pin) => (
        <Marker key={pin.id} position={pin.position}>
          <Popup>{pin.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
