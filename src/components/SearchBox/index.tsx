import { SearchBoxContent, StyledInput, StyledButton } from "./style";
import arrow from "../../assets/icon-arrow.svg";

const SearchBox = ({ ...rest }) => {
  return (
    <>
      <SearchBoxContent>
        <StyledInput
          autoComplete="off"
          {...rest}
          placeholder="Search for any IP address or domain"
        />
        <StyledButton>
          <img src={arrow} alt="search-arrow" />
        </StyledButton>
      </SearchBoxContent>
    </>
  );
};

export default SearchBox;
