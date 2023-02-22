import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { ThreeDots } from "react-loader-spinner";
import {
  GamingFailureContainer,
  GamingFailureHeading,
  GamingFailureImage,
  GamingFailureText,
  GamingLoaderContainer,
  GamingVideoHeaderContainer,
  GamingVideoHeaderIconContainer,
  GamingVideoListContainer,
  GamingVideoSuccessView,
  GamingFailureRetryBtn,
} from "./styleComponents";
import GameVideoItem from "../GameVideoItem";
import { GamingContentStore } from "../../MobxStore/GamingContentStore";
import { observer } from "mobx-react-lite";

export type GamingContentType = {
  id: string;
  title: string;
  thumbnail_url: string;
  view_count: string;
  thumbnailUrl: string;
  viewCount: string;
};

export type GamingContentStyle = {
  darkMode: boolean;
};
interface GamingPageProp {
  gamingContentStore: GamingContentStore;
}

const GamingContent = observer((props: GamingPageProp) => {
  const { gamingContentStore } = props;

  useEffect(() => {
    gamingContentStore.fetchGamingList();
  }, [gamingContentStore.apiStatus]);

  const renderGamingVideoList = () => {

    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <GamingVideoSuccessView>
              <GamingVideoHeaderContainer darkMode={isDarkMode}>
                <GamingVideoHeaderIconContainer darkMode={isDarkMode}>
                  <IoLogoGameControllerB className="nxtwatch-savedVideo-icons" />
                </GamingVideoHeaderIconContainer>
                <h1>Gaming</h1>
              </GamingVideoHeaderContainer>
              <GamingVideoListContainer>
                {gamingContentStore.gaming.map((item) => (
                  <NxtwatchContext.Consumer>
                    {(value) => {
                      return <GameVideoItem key={item.id} data={item} />;
                    }}
                  </NxtwatchContext.Consumer>
                ))}
              </GamingVideoListContainer>
            </GamingVideoSuccessView>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  const renderContent = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          switch (gamingContentStore.apiStatus) {
            case ApiStatusConstant.loading:
              return (
                <GamingLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </GamingLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <GamingFailureContainer darkMode={isDarkMode}>
                  <GamingFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <GamingFailureHeading>
                    Oops! Something went wrong
                  </GamingFailureHeading>
                  <GamingFailureText darkMode={isDarkMode}>
                    gamingContentStore.apiStatus We are having some trouble to
                    complete your request.
                  </GamingFailureText>
                  <GamingFailureText darkMode={isDarkMode}>
                    Please try again.
                  </GamingFailureText>
                  <GamingFailureRetryBtn
                    onClick={gamingContentStore.fetchGamingList}
                  >
                    Retry
                  </GamingFailureRetryBtn>
                </GamingFailureContainer>
              );
            case ApiStatusConstant.success:
              return renderGamingVideoList();
            default:
              return null;
          }
        }}
      </NxtwatchContext.Consumer>
    );
  };

  return (
    <div>
      <>{renderContent()}</>
    </div>
  );
});

export default GamingContent;
