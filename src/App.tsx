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
import i18n from "./I18n Folder/i18next";

const App = () => {
  const [isDarkMode, SetIsDarkMode] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [savedVideo] = useState([]);
  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lan", e.target.value);
  };

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
      <select className="changeLanguage" onChange={onChangeLanguage}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
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
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    </NxtwatchContext.Provider>
  );
};

export default App;
