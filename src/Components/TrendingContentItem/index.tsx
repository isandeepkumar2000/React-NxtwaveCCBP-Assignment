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
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import {
  VideoItem,
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemImage,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "../HomeVideoItem/styleComponents";
import {
  VideoItemDetailContainer,
  VideoItemImageContainer,
} from "../SavedVideoItem/styleComponets";
import { GoPrimitiveDot } from "react-icons/go";

export type TrebdingType = {
  title: string;
  id: string;
  thumbnailUrl: string;

  channel: {
    name: string;
    profile_image_url: string;
  };
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
  const [videosList, setVideoList] = useState<TrebdingType[]>([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  const getGamingApiDetails = async () => {
    try {
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
        setVideoList(updatedData);
        setApiStatus(ApiStatusConstant.success);
      } else {
        setApiStatus(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  useState(() => {
    getGamingApiDetails();
  });

  const renderTrendingVideosList = () => {
    console.log(videosList);
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
                {videosList.map((data) => (
                  <NxtwatchContext.Consumer>
                    {(value) => {
                      const { isDarkMode } = value;
                      const date = formatDistanceToNow(
                        new Date(data.publishedAt),
                        {
                          addSuffix: true,
                        }
                      );
                      return (
                        <Link
                          to={"/Nxtwatch/video/" + data.id}
                          className="nxtwatch-savedvideo-item"
                        >
                          <VideoItem>
                            <VideoItemImageContainer>
                              <VideoItemImage src={data.thumbnailUrl} alt="" />
                            </VideoItemImageContainer>
                            <VideoItemContent>
                              <VideoItemLogo
                                src={data.channel.profile_image_url}
                                alt=""
                              />
                              <VideoItemDetail>
                                <VideoItemTitle darkMode={isDarkMode}>
                                  {data.title}
                                </VideoItemTitle>
                                <VideoItemDetailContainer darkMode={isDarkMode}>
                                  <VideoItemChannel darkMode={isDarkMode}>
                                    {data.channel.name}
                                  </VideoItemChannel>
                                  <GoPrimitiveDot className="nxtwatch-video-item-dot nxtwatch-video-item-dot-small" />
                                  <VideoItemOtherDetailContainer
                                    darkMode={isDarkMode}
                                  >
                                    <VideoItemOtherDetail>
                                      {data.viewCount}
                                    </VideoItemOtherDetail>
                                    <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                                    <VideoItemOtherDetail>
                                      {date}
                                    </VideoItemOtherDetail>
                                  </VideoItemOtherDetailContainer>
                                </VideoItemDetailContainer>
                              </VideoItemDetail>
                            </VideoItemContent>
                          </VideoItem>
                        </Link>
                      );
                    }}
                  </NxtwatchContext.Consumer>
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
