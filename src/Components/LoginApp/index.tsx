import React from "react";
import { useState } from "react";

import {
  Button,
  DarkText,
  LoginBox,
  LoginContainer,
  LoginItems,
} from "./stylecomponents";
const LoginApp = () => {
  const [Login, setLogin] = useState(true);

  const LoginButton = () => {
    setLogin((Login) => !Login);
  };

  return (
    <LoginContainer>
      <LoginItems>
        <LoginBox>
          <div>
            <DarkText>{Login ? "Please Login" : "Welcome User"}</DarkText>
          </div>
          <div>
            <Button onClick={LoginButton}>{Login ? "Login" : "Logout"}</Button>
          </div>
        </LoginBox>
      </LoginItems>
    </LoginContainer>
  );
};

export default LoginApp;
