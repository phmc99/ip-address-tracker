import styled from "styled-components";
import Bg from "../../assets/pattern-bg.png";

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  .leaflet-container {
    height: 65vh;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 35vh;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AppContent = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  padding: 5px;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;