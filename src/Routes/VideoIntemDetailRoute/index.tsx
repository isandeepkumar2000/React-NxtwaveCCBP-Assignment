import React from "react";
import HeaderNxtwatch from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  VideoPage,
  VideoPageContent,
  VideoPageRightSection,
} from "./styleComponents";
import { useParams } from "react-router-dom";
import VideoDetails from "../../Components/VideoDetails";

export type VideoItemsDetailsStyle = {
  darkMode: boolean;
};

const VideoItemDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <VideoPage darkMode={isDarkMode}>
            <HeaderNxtwatch />
            <VideoPageContent>
              <SideBar />
              <VideoPageRightSection darkMode={isDarkMode}>
                <VideoDetails id={id} />
              </VideoPageRightSection>
            </VideoPageContent>
          </VideoPage>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default VideoItemDetailsRoute;
