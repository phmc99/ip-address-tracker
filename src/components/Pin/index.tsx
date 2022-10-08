import { latLng } from "leaflet";
import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import { useLocation } from "../../providers/LocationProvider";

const Pin = () => {
  const { location, position, setPosition } = useLocation();
  const map = useMap();

  useEffect(() => {
    if (location.location) {
      setPosition(latLng(location.location.lat, location.location.lng));
    }
    map.flyTo(position, map.getZoom());
  }, [location]);

  return <Marker position={position}></Marker>;
};

export default Pin;
