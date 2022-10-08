import styled from "styled-components";

export const InfoBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 10px;

  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    height: 10rem;

    margin-top: 1.5rem;
  }
`;

export const DataContent = styled.div`
  h6 {
    color: var(--dark-gray);
    font-weight: 700;
  }

  h4 {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--very-dark-gray);
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 70%;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-size: 1.4rem;
    }

    h6 {
      font-size: 0.8rem;
    }

    :nth-child(-n + 3) {
      border-right: 1.5px solid lightgrey;
    }
  }
`;
