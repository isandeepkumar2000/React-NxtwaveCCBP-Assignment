import styled from "styled-components";

import { StyleComponentTypeColor } from ".";

export const LoginFormContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 40px 15px;
  justify-content: center;
  align-items: center;
`;

export const LoginFormItems = styled.div`
  display: flex;
  padding: 40px 105px;
  align-items: center;
  /* width: 500px; */
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const Formstyling = styled.form`
  background-color: ${(props: StyleComponentTypeColor) =>
    props.darkMode ? "#0f0f0f" : "white"};
`;

export const JobbyLogoImage = styled.img`
  width: 200px;
  margin-bottom: 30px;
  margin-left: 25px;
`;

export const UserNameHeading = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${(props: StyleComponentTypeColor) =>
    props.darkMode ? "white" : "#64748b"};
  line-height: 10px;
  font-family: initial, sans-serif;
`;

export const PasswordHeading = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${(props: StyleComponentTypeColor) =>
    props.darkMode ? "white" : "#64748b"};

  line-height: 10px;
  font-family: initial, sans-serif;
`;
export const PasswordLabel = styled.label`
  color: ${(props: StyleComponentTypeColor) => (props.darkMode ? "white" : "black")};
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const UserNameInputSection = styled.input`
  height: 35px;
  width: 250px;
  margin-top: 5px;
  background-color: ${(props: StyleComponentTypeColor) =>
    props.darkMode ? "#0f0f0f" : "transperent"};
  font-weight: 700;
  border: 1px solid
    ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#475569" : "#cbd5e1"};
  margin-bottom: 10px;

  &:focus {
    outline: none;
    background-color: ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#e2e8f0" : "#e2e8f0"};
  }
  &::placeholder {
    font-weight: 100;
    color: ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#475569" : "#cbd5e1"};
  }

  border: 1px #b6c5ff solid;
`;
export const PasswordInputSection = styled.input`
  height: 35px;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 10px;

  font-weight: 700;
  border: 1px solid
    ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#475569" : "#cbd5e1"};
  background-color: ${(props: StyleComponentTypeColor) =>
    props.darkMode ? "#0f0f0f" : "transperent"};
  &:focus {
    outline: none;
    background-color: ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#e2e8f0" : "#e2e8f0"};
  }
  &::placeholder {
    font-weight: 100;
    color: ${(props: StyleComponentTypeColor) =>
      props.darkMode ? "#475569" : "#cbd5e1"};
  }
  border: 1px #b6c5ff solid;
`;

export const JobbyButton = styled.button`
  padding: 10px 108px;
  background-color: #3b82f6;
  color: white;
  font-weight: 700;
  margin-top: 10px;
  font-family: initial, sans-serif;
  font-size: 15px;
  border: none;
  border-radius: 8px;
`;

export const ErrorMsg = styled.span`
  color: red;
  font-weight: 600;
  font-size: 16px;
  font-family: initial, sans-serif;
`;
