import React, { useEffect, useState } from "react";
import LoginPage from "../../Components/LoginPage";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { LoginPageStyle } from "./styleComponents";
import { LoginFormStore } from "../../MobxStore/loginStore";
export type LoginRouteStyle = {
  darkMode: boolean;
};

const LoginRoute = () => {
  const [loginFormStore, setLoginFormStore] = useState(new LoginFormStore());

  useEffect(() => {
    setLoginFormStore(new LoginFormStore());
  }, []);

  return (
    <>
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <LoginPageStyle darkMode={isDarkMode}>
              <LoginPage loginFormStore={loginFormStore} />
            </LoginPageStyle>
          );
        }}
      </NxtwatchContext.Consumer>
    </>
  );
};

export default LoginRoute;
