import { DataContent, InfoBoxContent } from "./style";

const InfoBox = () => {
  return (
    <InfoBoxContent>
      <DataContent>
        <h6>IP ADDRESS</h6>
        <h4>192.168.0.1</h4>
      </DataContent>

      <DataContent>
        <h6>LOCATION</h6>
        <h4>Rio de janeiro, BR</h4>
      </DataContent>

      <DataContent>
        <h6>TIMEZONE</h6>
        <h4>UTC -03:00</h4>
      </DataContent>

      <DataContent>
        <h6>ISP</h6>
        <h4>Pedro's House</h4>
      </DataContent>
    </InfoBoxContent>
  );
};

export default InfoBox;
