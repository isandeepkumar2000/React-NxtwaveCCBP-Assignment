import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { TendingContentType } from "../TrendingContent";
import { formatDistanceToNow } from "date-fns";
import "./index.css";

import { GoPrimitiveDot } from "react-icons/go";

import {
  ContainerLink,
  VideoItem,
  VideoItemDetailContainer,
  VideoItemImage,
  VideoItemImageContainer,
} from "../SavedVideoItem/styleComponets";
import {
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemLogo,
  VideoItemTitle,
} from "../VideoDetails.tsx/styleComponets";
import {
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemOtherDetailContainerBox,
} from "./styleComponents";

interface SavedVideoPp {
  trending: TendingContentType;
}

export type SavedVideoStyle = {
  darkMode: boolean;
};

const TrendingContentItem: React.FC<SavedVideoPp> = (props) => {
  const { trending } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        const date = formatDistanceToNow(new Date(trending.publishedAt), {
          addSuffix: true,
        });
        return (
          <ContainerLink
            to={"/video/" + trending.id}
            className="nxtwatch-savedVideo-item"
          >
            <VideoItem>
              <VideoItemImageContainer>
                <VideoItemImage src={trending.thumbnailUrl} alt="" />
              </VideoItemImageContainer>
              <VideoItemContent>
                <VideoItemLogo
                  src={trending.channel.profile_image_url}
                  alt=""
                />
                <VideoItemDetail>
                  <VideoItemTitle darkMode={isDarkMode}>
                    {trending.title}
                  </VideoItemTitle>
                  <VideoItemDetailContainer darkMode={isDarkMode}>
                    <VideoItemChannel darkMode={isDarkMode}>
                      {trending.channel.name}
                    </VideoItemChannel>
                    {/* <GoPrimitiveDot className="nxtwatch-video-item-dot nxtwatch-video-item-dot-small" /> */}
                    <VideoItemOtherDetailContainerBox>
                      <VideoItemOtherDetail>
                        {trending.viewCount}
                      </VideoItemOtherDetail>
                      <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                      <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                    </VideoItemOtherDetailContainerBox>
                  </VideoItemDetailContainer>
                </VideoItemDetail>
              </VideoItemContent>
            </VideoItem>
          </ContainerLink>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default TrendingContentItem;
