import React, { useEffect, useState } from "react";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
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
} from "./styleComponets";

import { jwtToken } from "../../Constants/appConstants";
import VideoDetailsItems from "../VideoDetailsItems";

export type VideoDetailType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  videoUrl: string;

  viewCount: string;
  publishedAt: string;
  description: string;
  channel: {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  };
};

interface VideoIdType {
  id: string;
}

export type ChannelType = {
  name: string;
  profileImageUrl: string;
  subscriberCount: string;
};

export type VideoDetailsStyle = {
  darkMode: boolean;
};
export type VideoDetailsStyleActive = {
  isActive: boolean;
};

const VideoDetails: React.FC<VideoIdType> = (props) => {
  const { id } = props;
  const [videoDetail, setVideoDetails] = useState<VideoDetailType | null>(null);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getGamingApiDetails = async () => {
    try {
      const Tokens = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Tokens}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();

        const data = responseData.video_details;
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

        setVideoDetails(updatedData);
        setApiStatus(ApiStatusConstant.success);
      } else {
        setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  useEffect(() => {
    getGamingApiDetails();
  });

  const renderVideoDetails = () => {
    return <VideoDetailsItems data={videoDetail as VideoDetailType} />;
  };

  const renderContent = () => {
    console.log("API STATUS_testing", apiStatus);
    return (
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
                  <VideoDetailFailureRetryBtn onClick={getGamingApiDetails}>
                    Retry
                  </VideoDetailFailureRetryBtn>
                </VideoDetailFailureContainer>
              );
            case ApiStatusConstant.success:
              return renderVideoDetails();
            default:
              return null;
          }
        }}
      </NxtwatchContext.Consumer>
    );
  };

  return <div>{renderContent()}</div>;
};

export default VideoDetails;
