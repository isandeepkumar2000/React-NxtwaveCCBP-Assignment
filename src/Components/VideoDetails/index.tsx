import React, { useEffect, useState } from "react";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { ThreeDots } from "react-loader-spinner";
import {
  VideoDetailFailureContainer,
  VideoDetailFailureHeading,
  VideoDetailFailureImage,
  VideoDetailFailureRetryBtn,
  VideoDetailFailureText,
  VideoDetailLoaderContainer,
} from "./styleComponents";
import VideoItem from "../VideoItems";

export type VideoDetailType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  channel: string;
  viewCount: string;
  publishedAt: string;
  description: string;
};

export type VideoDetailsStyle = {
  darkMode: boolean;
};

const VideoDetails = (props: any) => {
  const { id } = props;
  const [videoDetail, setVideoDetails] = useState<VideoDetailType | null>();
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useEffect(() => {
    getDetail();
  });

  const getDetail = async () => {
    const jwtToken = Cookies.get("jobby_app_jwt_token");
    const url = `https://apis.ccbp.in/jobs/${id}`;
    const option = {
      method: "GET",
      Authorization: `Bearer ${jwtToken}`,
    };
    const responseData = await fetch(url, option);
    if (responseData.ok === true) {
      let data = await responseData.json();
      data = data.video_details;
      const updatedData = {
        title: data.title,
        id: data.id,
        thumbnailUrl: data.thumbnail_url,
        videoUrl: data.video_url,
        channel: data.channel,
        viewCount: data.view_count,
        publishedAt: data.published_at,
        description: data.description,
      };
      setVideoDetails({ ...updatedData });
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  const renderVideoItem = () => {
    // return <VideoItem data={videoDetail} />;
  };

  const renderContent = () => {
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        switch (apiStatus) {
          case ApiStatusConstant.loading:
            return (
              <VideoDetailLoaderContainer>
                <ThreeDots
                  color={isDarkMode ? "white" : "#1e293b"}
                  height={80}
                  width={80}
                />
              </VideoDetailLoaderContainer>
            );
          case ApiStatusConstant.failed:
            return (
              <VideoDetailFailureContainer darkMode={isDarkMode}>
                <VideoDetailFailureImage
                  src={
                    isDarkMode
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  }
                  alt="failure"
                />
                <VideoDetailFailureHeading>
                  Oops! Something went wrong
                </VideoDetailFailureHeading>
                <VideoDetailFailureText darkMode={isDarkMode}>
                  We are having some trouble to complete your request.
                </VideoDetailFailureText>
                <VideoDetailFailureText darkMode={isDarkMode}>
                  Please try again.
                </VideoDetailFailureText>
                <VideoDetailFailureRetryBtn onClick={getDetail}>
                  Retry
                </VideoDetailFailureRetryBtn>
              </VideoDetailFailureContainer>
            );
          case ApiStatusConstant.success:
            return renderVideoItem();
          default:
            return null;
        }
      }}
    </NxtwatchContext.Consumer>;
  };
  return <div>{renderContent()}</div>;
};

export default VideoDetails;
