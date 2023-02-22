import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { LoginFormStore } from "../../MobxStore/loginStore";
import { observer } from "mobx-react-lite";
import { jwtToken } from "../../Constants/appConstants";
import {
  ErrorMessage,
  FormContainer,
  InputField,
  InputLabel,
  LoginButton,
  LoginFormConatiner,
  PasswordLabel,
  WebsiteImage,
} from "./styleComponents";

export type LoginPages = {
  darkMode: boolean;
};

interface LoginPageProps {
  loginFormStore: LoginFormStore;
}

const LoginPage = observer((props: LoginPageProps) => {
  const { loginFormStore } = props;
  const history = useHistory();
  const [showPassword, setShowpassword] = useState(false);
  const [loginError, setLoginError] = useState({
    showLoginError: false,
    loginErrorMsg: "",
  });
  const {
    loginFormStore: {
      password,
      setPassword,
      username,
      setUserName,
      submitForm,
    },
  } = props;

  const onLoginSuccess = (token: string) => {
    Cookies.set(jwtToken, token, { expires: 2, path: "/" });

    history.replace("/");
  };

  const onLoginFailure = (errorMsg: string) => {
    setLoginError({ showLoginError: true, loginErrorMsg: errorMsg });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(onLoginSuccess, onLoginFailure);
  };
  const onShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginFormStore.setUserName(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginFormStore.setPassword(e.target.value);
  };

  if (Cookies.get(jwtToken)) {
    return <Redirect to="/" />;
  }
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <LoginFormConatiner>
            <FormContainer onSubmit={onSubmitForm} darkMode={isDarkMode}>
              <WebsiteImage
                src={
                  isDarkMode
                    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                }
                alt="website logo"
              />
              <InputLabel darkMode={isDarkMode}>USERNAME</InputLabel>
              <InputField
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                onChange={onChangeUsername}
                darkMode={isDarkMode}
              />
              <InputLabel darkMode={isDarkMode}>PASSWORD</InputLabel>
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChangePassword}
                darkMode={isDarkMode}
              />
              <div>
                <input type="checkbox" onChange={onShowPassword} />
                <PasswordLabel darkMode={isDarkMode}>
                  Show password
                </PasswordLabel>
              </div>
              <LoginButton type="submit">Login</LoginButton>
              {loginError.showLoginError && (
                <ErrorMessage className="login-error-msg">
                  *{loginError.loginErrorMsg}
                </ErrorMessage>
              )}
            </FormContainer>
          </LoginFormConatiner>
        );
      }}
    </NxtwatchContext.Consumer>
  );
});

export default LoginPage;
