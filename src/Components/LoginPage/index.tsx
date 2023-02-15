import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ErrorMsg,
  JobbyButton,
  JobbyLogoImage,
  LoginFormContainer,
  LoginFormItems,
  PasswordHeading,
  PasswordInputSection,
  PasswordLabel,
  UserNameHeading,
  UserNameInputSection,
} from "./styleComponents";
import { jwtToken } from "../../Constants/appConstants";
export type LoginPage = {
  darkMode: boolean;
};

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    showLoginError: false,
    loginErrorMsg: "",
  });

  const onLoginSuccess = (token: string) => {
    Cookies.set(jwtToken, token, { expires: 2, path: "/" });

    history.replace("/Nxtwatch");
  };

  const onLoginFailure = (errorMsg: string) => {
    setLoginError({ showLoginError: true, loginErrorMsg: errorMsg });
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      onLoginSuccess(data.jwt_token);
    } else {
      onLoginFailure(data.error_msg);
    }
  };
  const onShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const onChangeOfUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeOfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const renderUsernameField = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          return (
            <div className="input-container">
              <UserNameHeading className="input-label">
                USERNAME
              </UserNameHeading>
              <div>
                <UserNameInputSection
                  type="text"
                  id="username"
                  className="input-el"
                  onChange={onChangeOfUsername}
                  value={username}
                  placeholder="Username"
                />
              </div>
            </div>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  const renderPasswordField = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          return (
            <div className="input-container">
              <PasswordHeading className="input-label">
                PASSWORD
              </PasswordHeading>
              <div>
                <PasswordInputSection
                  type={showPassword ? "text" : "password"}
                  id="passwprd"
                  className="input-el"
                  onChange={onChangeOfPassword}
                  value={password}
                  placeholder="Password"
                />
              </div>
            </div>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  if (Cookies.get(jwtToken)) {
    return <Redirect to="/Nxtwatch" />;
  }
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <LoginFormContainer>
            <LoginFormItems>
              <form className="form-container" onSubmit={onFormSubmit}>
                <JobbyLogoImage
                  src={
                    isDarkMode
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  }
                  alt="website logo"
                />
                <div className="username-password-container">
                  {renderUsernameField()}
                  {renderPasswordField()}
                </div>
                <div>
                  <input type="checkbox" onChange={onShowPassword} />

                  <PasswordLabel darkMode={isDarkMode}>
                    Show password
                  </PasswordLabel>
                </div>
                <JobbyButton type="submit" className="login-btn">
                  Login
                </JobbyButton>

                {loginError.showLoginError && (
                  <ErrorMsg className="login-error-msg">
                    *{loginError.loginErrorMsg}
                  </ErrorMsg>
                )}
              </form>
            </LoginFormItems>
          </LoginFormContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LoginPage;
