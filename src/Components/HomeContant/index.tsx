import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import HomeVideoItem from "../HomeVideoItem";
import {
  HomeEmptyContainer,
  HomeEmptyHeading,
  HomeEmptyImage,
  HomeEmptyText,
  HomeFailureContainer,
  HomeFailureHeading,
  HomeFailureImage,
  HomeFailureRetryBtn,
  HomeFailureText,
  HomeLoaderContainer,
} from "./styleComponents";

export type HomeContentStyleComponentsType = {
  darkMode: boolean;
};

export type VideoTypeList = {
  title: string;
  id: string;
  thumbnailUrl: string;

  viewCount: string;
  publishedAt: string;
  thumbnail_url: string;
  view_count: string;
  published_at: string;
  channel: {
    name: string;
    profile_image_url: string;
  };
};

const HomeContent = (props: any) => {
  const { searchValue } = props;

  const [videoList, setVideoList] = useState([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const JwtToken = Cookies.get("jobby_app_jwt_token");
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchValue}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JwtToken}`,
        },
      }
    );
    if (response.ok === true) {
      const data = await response.json();
      const updatedData = data.video.map((video: VideoTypeList) => ({
        title: video.title,
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }));
      if (data.total === 0) {
        setVideoList({ ...updatedData });
        setApiStatus(ApiStatusConstant.empty);
        return;
      }
      setVideoList({ ...updatedData });
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  const renderVideoList = () => {
    <div>
      {videoList.map((video: VideoTypeList) => {
        <HomeVideoItem key={video.id} data={video} />;
      })}
    </div>;
  };

  const renderContent = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          switch (apiStatus) {
            case ApiStatusConstant.loading:
              return (
                <HomeLoaderContainer>
                  <ThreeDots
                    color={isDarkMode ? "white" : "#1e293b"}
                    height={80}
                    width={80}
                  />
                </HomeLoaderContainer>
              );
            case ApiStatusConstant.failed:
              return (
                <HomeFailureContainer darkMode={isDarkMode}>
                  <HomeFailureImage
                    src={
                      isDarkMode
                        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    }
                    alt=" Failure"
                  />
                  <HomeFailureHeading>
                    Oops! Something went Wrong
                  </HomeFailureHeading>
                  <HomeFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </HomeFailureText>
                  <HomeFailureText darkMode={isDarkMode}>
                    Please try again.
                  </HomeFailureText>
                  <HomeFailureRetryBtn onClick={getVideoList}>
                    Retry
                  </HomeFailureRetryBtn>
                </HomeFailureContainer>
              );
            case ApiStatusConstant.success:
              return renderVideoList();
            case ApiStatusConstant.empty:
              return (
                <HomeEmptyContainer darkMode={isDarkMode}>
                  <HomeEmptyImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no video"
                  />
                  <HomeEmptyHeading>No Search Result Found</HomeEmptyHeading>
                  <HomeEmptyText darkMode={isDarkMode}>
                    Try different keyword or remove search filters
                  </HomeEmptyText>
                  <HomeFailureRetryBtn onClick={getVideoList}>
                    Retry
                  </HomeFailureRetryBtn>
                </HomeEmptyContainer>
              );
            default:
              return null;
          }
        }}
      </NxtwatchContext.Consumer>
    );
  };

  return <div>{renderContent()}</div>;
};

export default HomeContent;
