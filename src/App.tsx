import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./ProtectRoute";
import Home from "./Routes/HomeRoute";
import TrendingRoute from "./Routes/TrendingRoute";
import GamingRoute from "./Routes/GamingRoute";
import VideoItemDetailsRoute from "./Routes/VideoIntemDetailRoute";
import NxtwatchContext from "./Contexts/NxtWatchContexts";
import NotFoundRoute from "./Routes/NotFoundRoute";
import VideoDetailsRoute from "./Routes/VideoIntemDetailRoute";

const App = () => {
  const [isDarkMode, SetIsDarkMode] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
  };
  const toggleDarkMode = () => {
    SetIsDarkMode(!isDarkMode);
  };

  return (
    <NxtwatchContext.Provider
      value={{
        isDarkMode,
        showBanner,
        toggleDarkMode: toggleDarkMode,
        closeBanner: closeBanner,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/Nxtwatch/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/trending`}
            component={TrendingRoute}
          />
          <ProtectedRoute
            exact
            path={`/Nxtwatch/gaming`}
            component={GamingRoute}
          />

          <ProtectedRoute
            exact
            path={`/Nxtwatch/video/:id`}
            component={VideoDetailsRoute}
          />
          <Route path="/Nxtwatch//not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    </NxtwatchContext.Provider>
  );
};

export default App;
