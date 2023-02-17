import React, { useState } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";

import { formatDistanceToNow } from "date-fns";
import { GoPrimitiveDot } from "react-icons/go";
import Player from "react-player";
import {
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "../HomeVideoItem/styleComponents";

import { VideoDetailType } from "../VideoDetails.tsx";
import {
  VideoItemActionBtn,
  VideoItemActionText,
  VideoItemBottomRight,
  VideoItemBottomSection,
  VideoItemChannelDetail,
  VideoItemHr,
  VideoItemOtherDetailLeft,
  VideoItemOtherDetailRight,
  VideoItemSubscriber,
  VideoItemTopSection,
} from "./styleComponents";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";

export type VideoItemStyle = {
  darkMode: boolean;
};
export type VideoItemActibve = {
  isActive: boolean;
};

interface VideoItemPp {
  data: VideoDetailType;
}

const VideoDetailsItems: React.FC<VideoItemPp> = (props) => {
  const { data } = props;
  const [linked, setLinked] = useState(false);
  const [dislinked, setDisLinked] = useState(false);
  const [saveVideo, setSaveVideo] = useState(false);

  const isDisliked = () => {
    if (linked) {
      setLinked(false);
    }
    if (dislinked) {
      setDisLinked(false);
    } else {
      setDisLinked(true);
    }
  };

  const isLiked = () => {
    if (dislinked) {
      setDisLinked(false);
    }
    if (linked) {
      setLinked(false);
    } else {
      setLinked(true);
    }
  };

  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode, savedVideo } = value;
        const onSaveButtonClicked = () => {
          setSaveVideo(!saveVideo);
        };

        const date = formatDistanceToNow(new Date(data.publishedAt), {
          addSuffix: true,
        });
        if (saveVideo) {
          savedVideo.push(data);
        }
        return (
          <VideoItemContent>
            <Player
              url={data.videoUrl}
              controls
              width="100%"
              className="nxtwatch-video-player"
            />
            <VideoItemDetail>
              <VideoItemTopSection className="Container">
                <VideoItemTitle darkMode={isDarkMode}>
                  {data.title}
                </VideoItemTitle>
                <VideoItemOtherDetailContainer
                  className="ButtonSectionArea"
                  darkMode={isDarkMode}
                >
                  <VideoItemOtherDetailLeft>
                    <VideoItemOtherDetail>
                      {data.viewCount}
                    </VideoItemOtherDetail>
                    <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                    <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                  </VideoItemOtherDetailLeft>
                  <VideoItemOtherDetailRight>
                    <VideoItemActionBtn isActive={linked} onClick={isLiked}>
                      <AiOutlineLike />
                      <VideoItemActionText>Like</VideoItemActionText>
                    </VideoItemActionBtn>
                    <VideoItemActionBtn
                      isActive={dislinked}
                      onClick={isDisliked}
                    >
                      <AiOutlineDislike />
                      <VideoItemActionText>Dislike</VideoItemActionText>
                    </VideoItemActionBtn>
                    <VideoItemActionBtn
                      isActive={saveVideo}
                      onClick={onSaveButtonClicked}
                    >
                      <RiPlayListAddLine />
                      <VideoItemActionText>Save</VideoItemActionText>
                    </VideoItemActionBtn>
                  </VideoItemOtherDetailRight>
                </VideoItemOtherDetailContainer>
              </VideoItemTopSection>
              <VideoItemHr />
              <VideoItemBottomSection>
                <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                <VideoItemBottomRight>
                  <VideoItemChannel darkMode={isDarkMode}>
                    {data.channel.name}
                  </VideoItemChannel>
                  <VideoItemSubscriber darkMode={isDarkMode}>
                    {data.channel.subscriber_count} subscribers
                  </VideoItemSubscriber>
                  <VideoItemChannelDetail darkMode={isDarkMode}>
                    {data.description}
                  </VideoItemChannelDetail>
                </VideoItemBottomRight>
              </VideoItemBottomSection>
            </VideoItemDetail>
          </VideoItemContent>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default VideoDetailsItems;
