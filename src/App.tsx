import React from "react";
import LoginPage from "./Components/LoginPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HeaderNxtwatch from "./Components/HeaderPart";
import NavLinkNxtwatch from "./Components/NavLink";
import ContactUs from "./Components/ContactOus";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
