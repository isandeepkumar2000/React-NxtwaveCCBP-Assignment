import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../LoginApp/stylecomponents";
import {
  ButtonStyled,
  FlexBoxCenter,
  FlexboxContainer,
  ImageWidth,
  InputStyle,
  NxtTranzWidth,
} from "./stylecomponents";

export type NxtWatchType = {
  userName: string;
  password: string;
};

const LoginForm = () => {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userDetails = { userName: username, password };

  const onSubmitSuccess = () => {
    history.push("/home");
  };
  const failureMsg = (errorMsg: any) => {
    console.log(errorMsg);
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (response.ok === true) {
      onSubmitSuccess();
    } else {
      failureMsg(data.errorMsg);
    }
  };

  const renderUsernameField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const renderPasswordField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="Nxt-Container">
      <FlexBoxCenter className="Nxt-items">
        <div className="Image-Container">
          <ImageWidth
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="Website Login"
          />
        </div>
        <div className="Form-Container">
          <FlexboxContainer className="form-container" onSubmit={onSubmitForm}>
            <NxtTranzWidth
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-website-logo-desktop-image"
              alt="website logo"
            />
            <span>USERNAME</span>
            <InputStyle
              type="text"
              className="input-container"
              value={username}
              onChange={renderUsernameField}
            ></InputStyle>
            <span>PASSWORD</span>
            <InputStyle
              type="password"
              className="input-container"
              value={password}
              onChange={renderPasswordField}
            ></InputStyle>
            <ButtonStyled type="submit" className="login-button">
              Login
            </ButtonStyled>
          </FlexboxContainer>
        </div>
      </FlexBoxCenter>
    </div>
  );
};

export default LoginForm;
