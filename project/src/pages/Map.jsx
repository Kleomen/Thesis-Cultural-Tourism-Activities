import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 35.3075, // Latitude for Crete
    lng: 25.0818, // Longitude for Crete
  };

  const pins = [
    { id: 1, position: { lat: 35.5138, lng: 24.0180 }, label: "Chania" },
    { id: 2, position: { lat: 35.1922, lng: 24.9181 }, label: "Rethymno" },
    { id: 3, position: { lat: 35.3377, lng: 25.1372 }, label: "Heraklion" },
    { id: 4, position: { lat: 35.1900, lng: 25.7172 }, label: "Agios Nikolaos" },
  ];

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
      >
        {pins.map((pin) => (
          <MarkerF
            key={pin.id}
            position={pin.position}
            label={pin.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
