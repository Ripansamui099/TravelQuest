import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapViewProps {
  query: string;
}

const FlyToLocation = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 12, { duration: 1.5 });
  }, [lat, lng, map]);
  return null;
};

const MapView = ({ query }: MapViewProps) => {
  const [position, setPosition] = useState<[number, number]>([25.2744, 51.5200]);
  const [label, setLabel] = useState(query);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const geocode = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
          { headers: { "User-Agent": "WanderlustTravelApp/1.0" } }
        );
        const data = await res.json();
        if (data.length > 0) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          setLabel(data[0].display_name.split(",").slice(0, 2).join(","));
        }
      } catch (err) {
        console.error("Geocoding failed:", err);
      } finally {
        setLoading(false);
      }
    };
    if (query) geocode();
  }, [query]);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 z-[1000] bg-card/50 backdrop-blur-sm flex items-center justify-center rounded-xl">
          <p className="text-muted-foreground text-sm animate-pulse">Searching for {query}...</p>
        </div>
      )}
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom
        style={{ height: "450px", width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToLocation lat={position[0]} lng={position[1]} />
        <Marker position={position}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
