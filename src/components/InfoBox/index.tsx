import { useLocation } from "../../providers/LocationProvider";
import { DataContent, InfoBoxContent } from "./style";

const InfoBox = () => {
  const { location } = useLocation();

  return (
    <InfoBoxContent>
      <DataContent>
        <h6>IP ADDRESS</h6>
        <h4>{location.ip ? location.ip : "-"}</h4>
      </DataContent>

      <DataContent>
        <h6>LOCATION</h6>
        <h4>
          {location.location
            ? `${location.location.region}, ${location.location.country}`
            : "-"}
        </h4>
      </DataContent>

      <DataContent>
        <h6>TIMEZONE</h6>
        <h4>{location.location ? location.location.timezone : "-"}</h4>
      </DataContent>

      <DataContent>
        <h6>ISP</h6>
        <h4>{location.isp ? location.isp : "-"}</h4>
      </DataContent>
    </InfoBoxContent>
  );
};

export default InfoBox;
