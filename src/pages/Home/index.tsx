import { MapContainer, TileLayer } from "react-leaflet";
import InfoBox from "../../components/InfoBox";
import Pin from "../../components/Pin";
import SearchBox from "../../components/SearchBox";
import { useLocation } from "../../providers/LocationProvider";
import { AppContent, Banner, HomeContent } from "./style";

const Home = () => {
  const { position } = useLocation();

  return (
    <HomeContent>
      <AppContent>
        <h1>IP Address Tracker</h1>
        <SearchBox />
        <InfoBox />
      </AppContent>
      <Banner />
      <MapContainer
        className="leaflet-container"
        zoomControl={false}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Pin />
      </MapContainer>
    </HomeContent>
  );
};

export default Home;
