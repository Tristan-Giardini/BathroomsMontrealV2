import styled from "styled-components";
import gendered from "./assets/gendered.png";
import toilet from "./assets/toilet.png";
import disabled from "./assets/disabled.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <HomeNav to="/">Bathrooms MTL</HomeNav>

      <img src={gendered} alt="This icon indicates a gendered washroom" />
      <div>Gendered</div>

      <img src={toilet} alt="This icon indicates a gender neutral washroom" />
      <div>Gender neutral</div>

      <img
        src={disabled}
        alt="This icon indicates a wheelchair accessible washroom"
      />
      <div>Accessible</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 85px;
  background-color: #eefbfd;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10% 0 10%;
  img {
    width: 35px;
    margin: 10px;
  }
  @media (max-width: 470px) {
    font-size: 75%;
  }
  @media (max-width: 390px) {
    width: 100%;
    display: flex;
    div {
      font-size: 10%;
    }
    img {
      width: 8%;
    }
  }
`;
const HomeNav = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-right: 10px;
  @media (max-width: 790px) {
    font-size: 80%;
  }
  @media (max-width: 470px) {
    font-size: 15%;
  }
  @media (max-width: 390px) {
    font-size: 10%;
  }
`;

export default Header;
