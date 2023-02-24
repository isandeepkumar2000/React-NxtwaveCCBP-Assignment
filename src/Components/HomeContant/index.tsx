import Cookies from "js-cookie";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { jwtToken } from "../../Constants/appConstants";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { HomeContentStore } from "../../MobxStore/HomeContentStore";
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
  homeContentStore: HomeContentStore;
}

const HomeContent: React.FC<GettingPP> = observer((props) => {
  const { homeContentStore } = props;

  const getGamingApiDetails = async () => {
    homeContentStore.fetchHomeList(homeContentStore.searchValue);
  };

  useEffect(() => {
    getGamingApiDetails();
  }, [homeContentStore.searchValue]);

  const renderVideoList = () => {
    return (
      <HomeVideoListContainer>
        {homeContentStore.home.map((video) => {
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

            switch (homeContentStore.apiStatus) {
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
      {homeContentStore.home.length === 0
        ? renderNoSearchResults()
        : renderContent()}
    </div>
  );
});

export default HomeContent;
