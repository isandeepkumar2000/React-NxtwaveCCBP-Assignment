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
import { jwtToken } from "../../Constants/appConstants";
import { GamingContentType } from "../../ComponentsTypes";
import FailureView from "../Failure";



const GamingContent = () => {
  const [videoList, setvideoList] = useState<GamingContentType[]>([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getGamingApiDetails = async () => {
    try {
      const Token = Cookies.get(jwtToken);
      const response = await fetch(`https://apis.ccbp.in/videos/gaming`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map(
          (video: GamingContentType) => ({
            title: video.title,
            id: video.id,
            thumbnailUrl: video.thumbnail_url,
            viewCount: video.view_count,
          })
        );
        setvideoList(updatedData);
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
  }, []);

  const renderGamingVideoList = () => {
    console.log(videoList);
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
                {videoList.map((item) => (
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
                <FailureView/>
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
