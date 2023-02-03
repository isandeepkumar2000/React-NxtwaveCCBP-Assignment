import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import {
  FormContainer,
  FormContainerItems,
  FormLoginButton,
  FormUserNameInput,
  FormUserNameTitle,
  LoginCompanyLogoImage,
  LoginFormContainer,
  LoginFormItems,
  LoginShoppingImage,
} from "./styleComponets";

export type NxtWatchType = {
  userName: string;
  password: string;
};

const LoginForm = () => {
  let history = useHistory();
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userDetails = { userName: username, password };

  const onSubmitSuccess = (jwtToken: any) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };
  const failureMsg = (errorMsg: string) => ({
    setErrorMsg,
    setShowSubmitError,
  });

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
      onSubmitSuccess(data.jwt_token);
    } else {
      failureMsg(data.errorMsg);
    }
  };

  const renderUsernameField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const renderPasswordField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken == undefined) {
    return <Redirect to="/" />;
  }

  return (
    <LoginFormContainer className="Nxt-Container">
      <LoginFormItems className="Nxt-items">
        <div className="Image-Container">
          <LoginShoppingImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="Website Login"
          />
        </div>
        <FormContainer className="Form-Container">
          <FormContainerItems
            className="form-container"
            onSubmit={onSubmitForm}
          >
            <LoginCompanyLogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-website-logo-desktop-image"
              alt="website logo"
            />
            <FormUserNameTitle>USERNAME</FormUserNameTitle>
            <FormUserNameInput
              type="text"
              className="input-container"
              value={username}
              placeholder="Username"
              onChange={renderUsernameField}
            ></FormUserNameInput>
            <FormUserNameTitle>PASSWORD</FormUserNameTitle>
            <FormUserNameInput
              type="password"
              className="input-container"
              value={password}
              placeholder="Password"
              onChange={renderPasswordField}
            ></FormUserNameInput>

            <div>
              <FormLoginButton type="submit" className="login-button">
                Login
              </FormLoginButton>
              {showSubmitError && <p>*{errorMsg}</p>}
            </div>
          </FormContainerItems>
        </FormContainer>
      </LoginFormItems>
    </LoginFormContainer>
  );
};

export default LoginForm;
