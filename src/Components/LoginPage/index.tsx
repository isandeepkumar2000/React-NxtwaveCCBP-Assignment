import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ErrorMsg,
  Formstyling,
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

export type StyleComponentTypeColor = {
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

  const onLoginSuccess = (jwtToken: string) => {
    Cookies.set("jobby_app_jwt_token", jwtToken, { expires: 2, path: "/" });
    history.replace("/");
  };

  const onLoginFailure = (errorMsg: string) => {
    console.log("in login failed func");

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
    console.log(data);

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
          const { isDarkMode } = value;
          return (
            <div className="input-container">
              <UserNameHeading darkMode={isDarkMode} className="input-label">
                USERNAME
              </UserNameHeading>
              <div>
                <UserNameInputSection
                  darkMode={isDarkMode}
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
          const { isDarkMode } = value;
          return (
            <div className="input-container">
              <PasswordHeading darkMode={isDarkMode} className="input-label">
                PASSWORD
              </PasswordHeading>
              <div>
                <PasswordInputSection
                  darkMode={isDarkMode}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input-el"
                  onChange={onChangeOfPassword}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div>
                <div>
                  <input type="checkbox" onChange={onShowPassword} />
                  <PasswordLabel darkMode={isDarkMode}>
                    Show password
                  </PasswordLabel>
                </div>
              </div>
            </div>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  const isLoggedIn = Cookies.get("jobby_app_jwt_token");

  if (isLoggedIn !== undefined) {
    return <Redirect to="/" />;
  }

  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <LoginFormContainer>
            <LoginFormItems>
              <Formstyling
                darkMode={isDarkMode}
                className="form-container"
                onSubmit={onFormSubmit}
              >
                <JobbyLogoImage
                  src={
                    isDarkMode
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  }
                  alt="jobby-website-logo"
                  className="logo-img"
                />
                <div className="username-password-container">
                  {renderUsernameField()}
                  {renderPasswordField()}
                </div>
                <JobbyButton type="submit" className="login-btn">
                  Login
                </JobbyButton>
                <div></div>
                {loginError.showLoginError && (
                  <ErrorMsg className="login-error-msg">
                    *{loginError.loginErrorMsg}
                  </ErrorMsg>
                )}
              </Formstyling>
            </LoginFormItems>
          </LoginFormContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LoginPage;
