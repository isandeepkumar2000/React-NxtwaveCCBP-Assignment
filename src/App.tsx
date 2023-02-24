import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute";
import TrendingRoute from "./Routes/TrendingRoute";
import GamingRoute from "./Routes/GamingRoute";
import NxtwatchContext from "./Contexts/NxtWatchContexts";
import NotFoundRoute from "./Routes/NotFoundRoute";
import VideoDetailsRoute from "./Routes/VideoIntemDetailRoute";
import SavedVideoRoute from "./Routes/SavedvideoRoute";
import LoginRoute from "./Routes/LoginRoute";
import HomeRoutes from "./Routes/HomeRoute";

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
          <ProtectedRoute exact path={`/trending`} component={TrendingRoute} />
          <ProtectedRoute exact path={`/gaming`} component={GamingRoute} />
          <ProtectedRoute
            exact
            path={`/savedVideos`}
            component={SavedVideoRoute}
          />

          <ProtectedRoute
            exact
            path={`/Nxtwatch/video/:id`}
            component={VideoDetailsRoute}
          />
          <Route path="/notfound" component={NotFoundRoute} />
          <ProtectedRoute path="/" component={HomeRoutes} />
        </Switch>
      </BrowserRouter>
    </NxtwatchContext.Provider>
  );
};

export default App;
