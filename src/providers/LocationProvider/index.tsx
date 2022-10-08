import axios from "axios";
import toast from "react-hot-toast";
import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { ILocation } from "../../interfaces";
import { LatLng, latLng } from "leaflet";

interface LocationProviderProps {
  children: ReactNode;
}

interface LocationProviderData {
  location: ILocation;
  position: LatLng;
  setPosition: any;
  findLocation: (ip: string) => void;
}

const LocationContext = createContext<LocationProviderData>(
  {} as LocationProviderData
);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const API_KEY = import.meta.env.VITE_IPIFY_KEY;
  const [location, setLocation] = useState({} as ILocation);
  const [position, setPosition] = useState<LatLng>(latLng(50, 50));

  const findLocation = async (ip: string) => {
    const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
    let response;

    const ipRegex =
      /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    const urlRegex =
      /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;

    if (ipRegex.test(ip)) {
      response = await axios.get(BASE_URL + `&ipAddress=${ip}`);
    } else if (urlRegex.test(ip)) {
      response = await axios.get(BASE_URL + `&domain=${ip}`);
    } else {
      toast("Busque por um IP ou Domínio", {
        icon: "🔎",
      });
      response = await axios.get(BASE_URL);
    }
    console.log(response?.data);

    const res = response?.data;

    setLocation(res);
    setPosition(latLng(res.location.lat, res.location.lng));
  };

  useEffect(() => {
    findLocation("");
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        position,
        findLocation,
        setPosition,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
