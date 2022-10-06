import styled from "styled-components";

export const SearchBoxContent = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  height: 3rem;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  margin-left: 0.2rem;
  border: 2px solid transparent;
  border-bottom-right-radius: 10px;
  color: var(--very-dark-gray);
  font-size: 1.1rem;
  font-weight: 500;
  height: 100%;

  ::placeholder {
    color: var(--dark-gray);
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  background: black;
  padding: 1rem;
  border: 0;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 2.8rem;
  height: 100%;

  img {
    width: 0.6rem;
  }
`;
