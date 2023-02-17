import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { jwtToken } from "../../Constants/appConstants";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import HomeVideoItem from "../HomeVideoItem";

import {
  FailureImage,
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
  HomeVideoListContainer,
  NoResultsMsg,
  NoSearchResultsContainer,
  RetryButtonInFailure,
  Suggestion,
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

  const getGamingApiDetails = async () => {
    try {
      const Tokens = Cookies.get(jwtToken);
      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Tokens}`,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.videos.map((video: VideoTypeList) => ({
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

  useEffect(() => {
    getGamingApiDetails();
  }, [searchValue]);

  const renderVideoList = () => {
    console.log(videoList);
    return (
      <HomeVideoListContainer>
        {videoList.map((video) => {
          return <HomeVideoItem key={video.id} data={video} />;
        })}
      </HomeVideoListContainer>
    );
  };
  const renderNoSearchResults = () => {
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <NoSearchResultsContainer>
              <FailureImage
                alt="no videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              />
              <NoResultsMsg darkMode={isDarkMode}>
                No Search results found
              </NoResultsMsg>
              <Suggestion darkMode={isDarkMode}>
                Try different key words or remove search filter
              </Suggestion>
              <RetryButtonInFailure>Retry</RetryButtonInFailure>
            </NoSearchResultsContainer>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  const renderContent = () => {
    return (
      <>
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
                    <HomeFailureRetryBtn onClick={getGamingApiDetails}>
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
                    <HomeFailureRetryBtn onClick={getGamingApiDetails}>
                      Retry
                    </HomeFailureRetryBtn>
                  </HomeEmptyContainer>
                );
              default:
                return null;
            }
          }}
        </NxtwatchContext.Consumer>
      </>
    );
  };

  return (
    <div>
      {videoList.length === 0 ? renderNoSearchResults() : renderContent()}
    </div>
  );
};

export default HomeContent;
