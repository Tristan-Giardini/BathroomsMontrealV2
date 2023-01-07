import styled from "styled-components";
import disabled from "./assets/disabled.png";

const PopupComponent = ({ selectedBathroom }) => {
  return (
    <StyledPopup>
      <h2>{selectedBathroom.name}</h2>
      <p>{selectedBathroom.details}</p>
      <StyledIcons>
        {selectedBathroom.accessible === true ? (
          <img src={disabled} alt="This bathroom is wheelchair accessible" />
        ) : null}
      </StyledIcons>
    </StyledPopup>
  );
};

const StyledIcons = styled.div`
  display: flex;
  img {
    width: 40px;
    margin-right: 10px;
  }
`;
const StyledPopup = styled.div`
  background-color: white;
  position: absolute;
  z-index: 1;
  padding: 10px;
  border: 2px solid black;
  h2 {
    padding-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default PopupComponent;
