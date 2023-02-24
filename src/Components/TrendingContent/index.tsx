import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
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
} from "./styleComponets";
import TrendingContentItem from "../TrendingContentItem";
import { TrendingContentStore } from "../../MobxStore/TrendingContentStore";
import { observer } from "mobx-react";

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

interface trendingContentProps {
  trendingContentStore: TrendingContentStore;
}

const TrendingContent = observer((props: trendingContentProps) => {
  const { trendingContentStore } = props;

  const getTrendingVideosList = async () => {
    trendingContentStore.fetchTrendingList();
  };

  useEffect(() => {
    getTrendingVideosList();
  }, [trendingContentStore.apiStatus]);

  const renderTrendingVideosList = () => {
    return (
      <>
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
                  {trendingContentStore.trending.map((item) => {
                    return (
                      <TrendingContentItem key={item.id} trending={item} />
                    );
                  })}
                </TrendingVideoListContainer>
              </TrendingVideoSuccessView>
            );
          }}
        </NxtwatchContext.Consumer>
      </>
    );
  };

  const renderContent = () => {
    console.log();
    return (
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          switch (trendingContentStore.apiStatus) {
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
                <>
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
                    <TrendingFailureRetryBtn onClick={getTrendingVideosList}>
                      Retry
                    </TrendingFailureRetryBtn>
                  </TrendingFailureContainer>
                </>
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
});

export default TrendingContent;
