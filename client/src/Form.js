import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ handleChange, setFormData, formData }) => {
  const navigate = useNavigate();

  const [isAccessibleClicked, setIsAccessibleClicked] = useState(false);
  const [isGenderClicked, setIsGenderClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lng && formData.lat) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/add-bathroom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          window.alert("Bathroom added!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  const handleSubmitClick = () => {
    if (!formData.name || !formData.lng || !formData.lat) {
      window.alert(
        "Oops! Make sure you at least select a point on the map and give the bathroom a name."
      );
    }
  };

  return (
    <>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <h2>Add bathroom</h2>
          <p>
            Click on the map, and fill out the form. Please put the name of the
            business or something easy to identify
          </p>
          <div>
            <span>Name of bathroom</span>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <Bathroom>
            <div>
              <label>Is this bathroom accessible?</label>
            </div>
            <Inputs>
              <input
                type="radio"
                name="accessible"
                value="true"
                onChange={handleChange}
                onClick={() => setIsAccessibleClicked(true)}
              />
              <label>yes</label>
              <input
                type="radio"
                name="accessible"
                value="false"
                onChange={handleChange}
                onClick={() => setIsAccessibleClicked(true)}
              />
              <label>no</label>
            </Inputs>
          </Bathroom>
          <Gender>
            <div>
              <label>Is this bathroom gendered?</label>
            </div>
            <Inputs>
              <input
                type="radio"
                name="gendered"
                value="true"
                onChange={handleChange}
                onClick={() => setIsGenderClicked(true)}
              />
              <label>yes</label>
              <input
                type="radio"
                name="gendered"
                value="false"
                onChange={handleChange}
                onClick={() => setIsGenderClicked(true)}
              />
              <label>no</label>
            </Inputs>
          </Gender>
          <div>
            <span>Details (key, code, etc)</span>
            <input type="text" name="details" onChange={handleChange} />
          </div>
          <div></div>
          <Submit onClick={handleSubmitClick}>Submit</Submit>
          <div></div>
          <p></p>
          <h2>Contact us</h2>
          <p>
            For more information about this project and to notify us of a change
            in detail click <a href="/contact">here</a>
          </p>
        </form>
      </FormDiv>
    </>
  );
};

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 65%;
    margin: 3%;
    @media (max-width: 1000px) {
      width: 100%;
      margin: 1%;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 1% 0;
  }
  p {
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  @media (max-width: 390px) {
    padding: 5%;
    font-size: 50%;
  }
`;

const Submit = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const Inputs = styled.div`
  display: flex;
  width: 41%;
`;

const Bathroom = styled.div``;

const Gender = styled.div``;

export default Form;
