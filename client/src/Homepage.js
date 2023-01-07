import MapContainer from "./MapContainer";
import styled from "styled-components";
import Form from "./Form";
import { useState } from "react";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <StyledHome>
      <MapContainer
        handleChange={handleChange}
        setFormData={setFormData}
        formData={formData}
      />
      <Form
        handleChange={handleChange}
        setFormData={setFormData}
        formData={formData}
      />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  margin: 20px auto;
  width: 800px;
  height: 500px;
  @media (max-width: 798px) {
    width: 100%;
  }
`;

export default Homepage;
