import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { ThreeDots } from "react-loader-spinner";
import { Link, Redirect } from "react-router-dom";
import { jwtToken } from "../../Constants/appConstants";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import HomeVideoItem from "../HomeVideoItem";
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
  channel: {
    name: string;
    profile_image_url: string;
  };
  title: string;
  id: string;
  thumbnailUrl: string;

  viewCount: string;
  publishedAt: string;
  thumbnail_url: string;
  view_count: string;
  published_at: string;
};
interface GettingPP {
  searchValue: string;
}

const HomeContent: React.FC<GettingPP> = (props) => {
  const { searchValue } = props;

  const [videoList, setVideoList] = useState<VideoTypeList[]>([]);

  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const JwtToken = Cookies.get(jwtToken);
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
      console.log({ data });
      const updatedData = data.videos.map((video: VideoTypeList) => ({
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
      setVideoList(updatedData);
      setApiStatus(ApiStatusConstant.success);
    } else {
      setApiStatus(ApiStatusConstant.failed);
    }

    console.log({ apiStatus });
  };

  const renderVideoList = () => {
    return (
      <div>
        {videoList.map((video) => {
          <NxtwatchContext.Consumer>
            {(value) => {
              const { isDarkMode } = value;
              const date = formatDistanceToNow(new Date(video.publishedAt), {
                addSuffix: true,
              });
              return (
                <Link
                  to={"/Nxtwatch/video/" + video.id}
                  className="nxtwatch-video-item"
                >
                  <VideoItem>
                    <VideoItemImage src={video.thumbnailUrl} alt="" />
                    <VideoItemContent>
                      <VideoItemLogo
                        src={video.channel.profile_image_url}
                        alt=""
                      />
                      <VideoItemDetail>
                        <VideoItemTitle darkMode={isDarkMode}>
                          {video.title}
                        </VideoItemTitle>
                        <VideoItemChannel darkMode={isDarkMode}>
                          {video.channel.name}
                        </VideoItemChannel>
                        <VideoItemOtherDetailContainer darkMode={isDarkMode}>
                          <VideoItemOtherDetail>
                            {video.viewCount}
                          </VideoItemOtherDetail>
                          <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                          <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                        </VideoItemOtherDetailContainer>
                      </VideoItemDetail>
                    </VideoItemContent>
                  </VideoItem>
                </Link>
              );
            }}
          </NxtwatchContext.Consumer>;
        })}
      </div>
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
