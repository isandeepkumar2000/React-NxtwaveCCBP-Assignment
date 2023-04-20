import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute";
import Home from "./Routes/HomeRoute";
import TrendingRoute from "./Routes/TrendingRoute";
import GamingRoute from "./Routes/GamingRoute";
import NxtwatchContext from "./Contexts/NxtWatchContexts";
import NotFoundRoute from "./Routes/NotFoundRoute";
import VideoDetailsRoute from "./Routes/VideoIntemDetailRoute";
import SavedVideoRoute from "./Routes/SavedvideoRoute";
import LoginRoute from "./Routes/LoginRoute";
import HomeRoute from "./Routes/HomeRoute";

const App = () => {
  const [isDarkMode, SetIsDarkMode] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [savedVideo] = useState([]);

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
        savedVideo,
        toggleDarkMode: toggleDarkMode,
        closeBanner: closeBanner,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginRoute} />

          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />

          <ProtectedRoute
            exact
            path="/savedVideos"
            component={SavedVideoRoute}
          />

          <ProtectedRoute
            exact
            path="/video/:id"
            component={VideoDetailsRoute}
          />
          <ProtectedRoute path="/" component={HomeRoute} />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    </NxtwatchContext.Provider>
  );
};

export default App;
