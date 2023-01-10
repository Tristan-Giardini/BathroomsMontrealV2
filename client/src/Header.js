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
  @media (max-width: 390px) {
    width: 100%;
    display: flex;
    img {
      width: 10px;
    }
  }
`;
const HomeNav = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-right: 10px;
`;

export default Header;
