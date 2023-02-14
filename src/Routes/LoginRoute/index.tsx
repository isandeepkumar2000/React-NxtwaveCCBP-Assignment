import React from "react";
import LoginPage from "../../Components/LoginPage";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { LoginPageStyle } from "./styleComponents";
export type LoginRouteStyle = {
  darkMode: boolean;
};

const LoginRoute = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <LoginPageStyle darkMode={isDarkMode}>
            <LoginPage />
          </LoginPageStyle>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LoginRoute;
