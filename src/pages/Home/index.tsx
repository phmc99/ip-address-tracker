import { latLng } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import InfoBox from "../../components/InfoBox";
import SearchBox from "../../components/SearchBox";
import { AppContent, Banner, HomeContent } from "./style";

const Home = () => {
  const position = latLng(50.5, 30.5);

  return (
    <HomeContent>
      <AppContent>
        <h1>IP Address Tracker</h1>
        <SearchBox />
        <InfoBox />
      </AppContent>
      <Banner />
      <MapContainer className="leaflet-container" zoomControl={false} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </HomeContent>
  );
};

export default Home;
