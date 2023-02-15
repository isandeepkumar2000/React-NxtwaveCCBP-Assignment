import { Component, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";

import SavedVideoItem from "../SavedVideoItem";
import { MdLocalFireDepartment } from "react-icons/md";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  TrendingFailureContainer,
  TrendingFailureHeading,
  TrendingFailureImage,
  TrendingFailureRetryBtn,
  TrendingFailureText,
  TrendingLoaderContainer,
  TrendingVideoHeaderContainer,
  TrendingVideoHeaderIconContainer,
  TrendingVideoListContainer,
  TrendingVideoSuccessView,
} from "./styleComponents";
import { jwtToken } from "../../Constants/appConstants";

export type TrebdingType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  channel: string;
  viewCount: string;
  publishedAt: string;
  thumbnail_url: string;
  view_count: string;
  published_at: string;
};

export type trendingStyle = {
  darkMode: string;
};

const TrendingContent = () => {
  const [videosList, setVideoList] = useState([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useState(() => {
    getTrendingVideosList();
  });

  const getTrendingVideosList = async () => {
    const Token = Cookies.get(jwtToken);
    const response = await fetch(`https://apis.ccbp.in/videos/trending`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      const updatedData = responseData.videos.map((video: TrebdingType) => ({
        title: video.title,
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }));

      setVideoList({ ...updatedData });
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  const renderTrendingVideosList = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          return (
            <TrendingVideoSuccessView>
              <TrendingVideoHeaderContainer>
                <TrendingVideoHeaderIconContainer>
                  <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
                </TrendingVideoHeaderIconContainer>
                <h1>Trending</h1>
              </TrendingVideoHeaderContainer>
              <TrendingVideoListContainer>
                {videosList.map((item) => (
                  <SavedVideoItem data={item} />
                ))}
              </TrendingVideoListContainer>
            </TrendingVideoSuccessView>
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
                <TrendingLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </TrendingLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <TrendingFailureContainer>
                  <TrendingFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt="failure"
                  />
                  <TrendingFailureHeading>
                    Oops! Something went wrong
                  </TrendingFailureHeading>
                  <TrendingFailureText>
                    We are having some trouble to complete your request.
                  </TrendingFailureText>
                  <TrendingFailureText>Please try again.</TrendingFailureText>
                  <TrendingFailureRetryBtn>Retry</TrendingFailureRetryBtn>
                </TrendingFailureContainer>
              );
            case ApiStatusConstant.success:
              return renderTrendingVideosList();
            default:
              return null;
          }
        }}
      </NxtwatchContext.Consumer>
    );
  };

  return <>{renderContent()}</>;
};
export default TrendingContent;
