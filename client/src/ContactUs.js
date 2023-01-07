import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactUs = () => {
  const form = useRef();
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = (e) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        window.alert("Oops! Something went wrong. Please try again.");
      }
    );
    window.alert("Email sent!");
  };

  return (
    <StyledHome>
      <FormDiv>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>
          <p></p>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <div></div>
          <input type="submit" value="Send" />
          <div></div>
          <p></p>
          <h2>Information</h2>
          <p>
            This project was originally started by Lili Dobronyi with the
            intention to provide Montreal locals with businesses/facilities that
            had their bathrooms open to the public during the covid-19 pandemic.
            Oliver Mercer-Smail and Tristan Giardini turned this idea into a
            full-stack web application. If you have any questions, let us know!
          </p>
        </form>
      </FormDiv>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  margin: 20px auto;
  width: 800px;
  height: 500px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 390px) {
    padding: 5%;
    font-size: 50%;
  }
`;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 65%;
    margin: 3%;
    textarea {
      height: 100px;
    }
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
`;

export default ContactUs;
