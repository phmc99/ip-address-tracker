import { SearchBoxContent, StyledInput, StyledButton } from "./style";
import arrow from "../../assets/icon-arrow.svg";
import { useState } from "react";
import { useLocation } from "../../providers/LocationProvider";

const SearchBox = ({ ...rest }) => {
  const { findLocation } = useLocation();
  const [ip, setIp] = useState<string>("");

  const handleSearchIp = () => {
    console.log(ip);
    findLocation(ip);
    setIp("");
  };

  return (
    <>
      <SearchBoxContent>
        <StyledInput
          autoComplete="off"
          {...rest}
          placeholder="Search for any IP address or domain"
          value={ip}
          onChange={(e) => {
            setIp(e.target.value);
          }}
        />
        <StyledButton onClick={handleSearchIp}>
          <img src={arrow} alt="search-arrow" />
        </StyledButton>
      </SearchBoxContent>
    </>
  );
};

export default SearchBox;
