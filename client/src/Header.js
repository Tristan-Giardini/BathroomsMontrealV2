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
      <div>Gendered washroom</div>
      <img src={toilet} alt="This icon indicates a gender neutral washroom" />
      <div>Gender neutral washroom</div>
      <img
        src={disabled}
        alt="This icon indicates a wheelchair accessible washroom"
      />
      <div>Accessible washroom</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 85px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  img {
    width: 35px;
    margin: 10px;
  }
  @media (max-width: 390px) {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    img {
      width: 10px;
    }
  }
`;

const HomeNav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
// const Types = styled.div`
//   div {
//     display: flex;
//     flex-direction: row;
//     font-size: 60%;
//     align-items: center;
//   }
// `;

export default Header;
