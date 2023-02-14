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

const GamingContent = () => {
  const [gameList, setGameList] = useState([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useEffect(() => {
    getGamingApiDetails();
  }, []);

  const getGamingApiDetails = async () => {
    const JwtToken = Cookies.get("jobby_app_jwt_token");
    const apiUrl = "https://apis.ccbp.in/videos/gaming";
    const options = {
      method: "GET",
      Authorization: `Bearer ${JwtToken}`,
    };
    const responseData = await fetch(apiUrl, options);
    if (responseData.ok === true) {
      const data = await responseData.json();
      const updatedData = data.map((game: GamingContentType) => ({
        title: game.title,
        id: game.id,
        thumbnailUrl: game.thumbnail_url,
        viewCount: game.view_count,
      }));
      setGameList({ ...updatedData });
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }
  };

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
                {gameList.map((item) => (
                  <GameVideoItem data={item} />
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
          switch (apiStatus) {
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
                    We are having some trouble to complete your request.
                  </GamingFailureText>
                  <GamingFailureText darkMode={isDarkMode}>
                    Please try again.
                  </GamingFailureText>
                  <GamingFailureRetryBtn onClick={getGamingApiDetails}>
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

  return <div>{renderContent()}</div>;
};

export default GamingContent;
