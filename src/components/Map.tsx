import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { data } from "../data";

function LocationMarker({
  marker,
  position,
  popup,
}: {
  marker: string;
  position: [number, number];
  popup: string;
}) {
  return (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: marker,
        iconSize: [35, 50],
        iconAnchor: [15, 60],
      })}
      children={<Popup>{popup}</Popup>}
    />
  );
}

interface ILocation {
  coordinates: number[];
  marker: string;
  name: string;
  icon: React.ReactNode;
}

export function Map() {
  return (
    <section className="grid grid-cols-1 lg:flex items-center justify-center px-8 md:px-16 mt-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold Rubik uppercase">
          Places worth visiting
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:mr-12 xl:mr-20">
          {data.locations.map((location: ILocation, index: number) => {
            return (
              <button
                className="bg-white shadow rounded-lg px-8 py-3 flex justify-center items-center gap-2"
                style={{ fontSize: "15.5px" }}
                key={index}
              >
                <div style={{ fontSize: "2rem", color: data.colors.accent2 }}>
                  {location.icon}
                </div>
                {location.name}
              </button>
            );
          })}
        </div>
      </div>

      <MapContainer
        center={[36.520176, -4.671166]}
        zoom={11.45}
        scrollWheelZoom
        style={{
          border: `12px solid ${data.colors.secondary}`,
          borderRadius: "2rem",
          zIndex: "0",
        }}
        className="w-[16rem] h-[25rem] sm:w-[25rem] md:w-[35rem] md:h-[35rem] lg:w-[25rem] lg:h-[35rem] mx-auto mt-6 lg:mx-0 lg:mt-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.locations.map((location: ILocation, index: number) => {
          return (
            <LocationMarker
              position={location.coordinates as [number, number]}
              marker={location.marker}
              popup={location.name}
              key={index}
            />
          );
        })}
      </MapContainer>
    </section>
  );
}
