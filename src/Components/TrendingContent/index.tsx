import Cookies from "js-cookie";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { MdLocalFireDepartment } from "react-icons/md";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { formatDistanceToNow } from "date-fns";
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
} from "./styleComponets";
import SavedVideoItem from "../SavedVideoItem";
import { Link } from "react-router-dom";
import {
  VideoItem,
  VideoItemContent,
  VideoItemDetail,
  VideoItemImage,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "../HomeVideoItem/styleComponents";
import {
  VideoItemChannel,
  VideoItemDetailContainer,
  VideoItemImageContainer,
} from "../SavedVideoItem/styleComponets";
import { GoPrimitiveDot } from "react-icons/go";

export type TendingContentType = {
  id: string;
  title: string;
  thumbnail_url: string;
  channel: {
    name: string;
    profile_image_url: string;
  };
  view_count: string;
  published_at: string;
  viewCount: string;
  thumbnailUrl: string;
  publishedAt: string;
};

export type TrendingContentStyle = {
  darkMode: boolean;
};

const TrendingContent = () => {
  const [trending, setTrending] = useState<TendingContentType[]>([]);
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useState(() => {
    getTrendingApiDetails();
  });

  const getTrendingApiDetails = async () => {
    const jwtToken = Cookies.get("nxtwatch_app_jwt_token");
    const apiUrl = "https://apis.ccbp.in/videos/trending";
    const options = {
      method: "GET",
      Authorization: `Bearer ${jwtToken}`,
    };
    const responseData = await fetch(apiUrl, options);
    if (responseData.ok === true) {
      const data = await responseData.json();
      const updatedData = data.map((trending: TendingContentType) => ({
        title: trending.title,
        id: trending.id,
        thumbnailUrl: trending.thumbnail_url,
        channel: trending.channel,
        viewCount: trending.view_count,
        publishedAt: trending.published_at,
      }));
      setTrending({ ...updatedData });
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  const renderTrendingVideosList = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <TrendingVideoSuccessView>
              <TrendingVideoHeaderContainer darkMode={isDarkMode}>
                <TrendingVideoHeaderIconContainer darkMode={isDarkMode}>
                  <MdLocalFireDepartment className="nxtwatch-savedVideo-icons" />
                </TrendingVideoHeaderIconContainer>
                <h1>Trending</h1>
              </TrendingVideoHeaderContainer>
              <TrendingVideoListContainer>
                {trending.map((data) => (
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
                                  <VideoItemChannel>
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
                <TrendingFailureContainer darkMode={isDarkMode}>
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
                  <TrendingFailureText darkMode={isDarkMode}>
                    We are having some trouble to complete your request.
                  </TrendingFailureText>
                  <TrendingFailureText darkMode={isDarkMode}>
                    Please try again.
                  </TrendingFailureText>
                  <TrendingFailureRetryBtn onClick={getTrendingApiDetails}>
                    Retry
                  </TrendingFailureRetryBtn>
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

  return <div>{renderContent()}</div>;
};

export default TrendingContent;
