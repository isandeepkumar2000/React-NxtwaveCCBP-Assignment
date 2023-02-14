import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectRoute";
import Home from "./Routes/HomeRoute";
import TrendingRoute from "./Routes/TrendingRoute";
import GamingRoute from "./Routes/GamingRoute";
import VideoItemDetailsRoute from "./Routes/VideoIntemDetailRoute";
import NxtwatchContext from "./Contexts/NxtWatchContexts";
import NotFoundRoute from "./Routes/NotFoundRoute";

const App = () => {
  const [isDarkMode, SetIsDarkMode] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  // const [savedVideo, setSavedVideo] = useState([]);
  // const [likedVideo, setLikedVideo] = useState([]);
  // const [dislikedVideo, setDislikedVideo] = useState([]);

  const closeBanner = () => {
    setShowBanner(false);
  };
  const toggleDarkMode = () => {
    SetIsDarkMode(!isDarkMode);
  };

  //   const toggleDislikedVideo = (video: any) => {

  //     if (dislikedVideo.find((item) => item.id === video.id)) {
  //     setDislikedVideo((prevState) => ({
  //         dislikedVideo: prevState.dislikedVideo.filter(
  //           (item) => item.id !== video.id
  //         ),
  //       }));
  //     } else {
  //       this.setState((prevState) => ({
  //         dislikedVideo: [...prevState.dislikedVideo, video],
  //       }));
  //       if (likedVideo.find((item) => item.id === video.id)) {
  //         this.setState((prevState) => ({
  //           likedVideo: prevState.likedVideo.filter(
  //             (item) => item.id !== video.id
  //           ),
  //         }));
  //       }
  //     }
  //   };
  //  const toggleLikedVideo = (video: any) => {
  //     const { likedVideo, dislikedVideo } = this.state;
  //     if (likedVideo.find((item) => item.id === video.id)) {
  //       this.setState((prevState) => ({
  //         likedVideo: prevState.likedVideo.filter((item) => item.id !== video.id),
  //       }));
  //     } else {
  //       this.setState((prevState) => ({
  //         likedVideo: [...prevState.likedVideo, video],
  //       }));
  //       if (dislikedVideo.find((item) => item.id === video.id)) {
  //         this.setState((prevState) => ({
  //           dislikedVideo: prevState.dislikedVideo.filter(
  //             (item) => item.id !== video.id
  //           ),
  //         }));
  //       }
  //     }
  // //   };
  // const toggleSavedVideo = (video: string) => {
  //   if (savedVideo.find((item) => item.id === video.id)) {
  //     // this.setState((prevState) => ({
  //     //   savedVideo: prevState.savedVideo.filter((item) => item.id !== video.id),
  //     // }));
  //     setSavedVideo((prevState) => ({
  //       savedVideo: prevState.saved,
  //     }));
  //   } else {
  //     this.setState((prevState) => ({
  //       savedVideo: [...prevState.savedVideo, video],
  //     }));
  //   }
  // };

  return (
    <NxtwatchContext.Provider
      value={{
        isDarkMode,
        showBanner,
        // savedVideo,
        // likedVideo,
        // dislikedVideo,
        // toggleDislikedVideo: toggleDislikedVideo,
        // toggleLikedVideo: toggleLikedVideo,
        toggleDarkMode: toggleDarkMode,
        closeBanner: closeBanner,
        // toggleSavedVideo,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/Nxtwatch/login" component={LoginPage} />
          <ProtectedRoute exact path="/Nxtwatch" component={Home} />
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
          {/* <ProtectedRoute
          exact
          path={`/Nxtwatch/savedvideos`}
          component={SavedVideoRoute}
        /> */}
          {/* <ProtectedRoute
          exact
          path={`/Nxtwatch/video/:id`}
          component={VideoItemDetailsRoute}
        /> */}
          <Route component={NotFoundRoute} />
        </Switch>
      </BrowserRouter>
    </NxtwatchContext.Provider>
  );
};

export default App;
