import React, { useEffect, useState } from "react";
import ApiStatusConstant from "../../ConstantsApiStatus/ApiConstantStatus";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { ThreeDots } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

import {
  VideoDetailFailureContainer,
  VideoDetailFailureHeading,
  VideoDetailFailureImage,
  VideoDetailFailureRetryBtn,
  VideoDetailFailureText,
  VideoDetailLoaderContainer,
} from "./styleComponets";
import {
  AttributesContainer,
  ChannelContainer,
  ContentContainer,
  IconParas,
  ImageEl,
  ParaEl,
  VideoContainer,
  VideoFrameContainer,
} from "../VideoDetails/styleComponents";
import { jwtToken } from "../../Constants/appConstants";
interface VideoDetailsState {
  data: VideoDetailType;
}
export type VideoDetailType = {
  title: string;
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  channel: string;
  viewCount: string;
  publishedAt: string;
  description: string;
};

interface VideodetailSend {
  videoDetail: VideoDetailType;
  channelDataObj: ChannelType;
}
interface Idtype {
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

const VideoDetails: React.FC<Idtype> = () => {
  const { id } = useParams<{ id: string }>();
  const [videoDetail, setVideoDetails] = useState<VideoDetailType | null>(null);
  const [channelDataObj, setChannelDataObj] = useState({});
  const [apiStatus, setApiStatus] = useState(ApiStatusConstant.loading);
  const [liked, setLiked] = useState(false);
  const [diliked, setDiLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const isDisliked = () => {
    if (liked) {
      setLiked(false);
    }
    if (diliked) {
      setDiLiked(false);
    } else {
      setDiLiked(true);
    }
  };

  const isLiked = () => {
    if (diliked) {
      setDiLiked(false);
    }
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  const onSave = async () => {
    if (saved) {
      await setSaved(false);
    } else {
      await setSaved(true);
    }
  };

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
        const convertedData = {
          channel: data.channel,
          description: data.description,
          id: data.id,
          publishedAt: data.published_at,
          thumbnailUrl: data.thumbnail_url,
          title: data.title,
          videoUrl: data.video_url,
          viewCount: data.view_count,
        };
        const channelData = {
          name: data.channel.name,
          profileImageUrl: data.channel.profile_image_url,
          subscriberCount: data.channel.subscriber_count,
        };
        setVideoDetails(convertedData);
        setApiStatus(ApiStatusConstant.success);
        setChannelDataObj(channelData);
        setChannelDataObj(ApiStatusConstant.success);
      } else {
        setApiStatus(ApiStatusConstant.failed);
        setChannelDataObj(ApiStatusConstant.failed);
      }
    } catch (err) {
      console.log(err);
      setApiStatus(ApiStatusConstant.failed);
    }
  };

  useEffect(() => {
    getGamingApiDetails();
  }, []);

  const renderVideoDetails = (props: VideodetailSend) => {
    const { videoDetail, channelDataObj } = props;

    return (
      <NxtwatchContext.Consumer>
        {(values) => {
          const { isDarkMode } = values;
          return (
            <VideoContainer darkMode={isDarkMode}>
              <VideoFrameContainer>
                <ReactPlayer
                  url={videoDetail.videoUrl}
                  controls
                  className="react-player"
                />
                <ParaEl>
                  <b>{videoDetail.title}</b>
                </ParaEl>
              </VideoFrameContainer>
              <AttributesContainer>
                <ParaEl>
                  {videoDetail.viewCount} views . {videoDetail.publishedAt}
                </ParaEl>
                <ChannelContainer darkMode={isDarkMode}>
                  <IconParas onClick={isLiked}>
                    <AiOutlineLike /> Like
                  </IconParas>
                  <IconParas onClick={isDisliked}>
                    <AiOutlineDislike /> Dislike
                  </IconParas>
                  <IconParas onClick={onSave}>
                    <MdPlaylistAdd />
                  </IconParas>
                </ChannelContainer>
              </AttributesContainer>
              <ChannelContainer darkMode={isDarkMode}>
                <ImageEl src={channelDataObj.profileImageUrl} />
                <ContentContainer>
                  <ParaEl>
                    <b>{channelDataObj.name}</b>
                  </ParaEl>
                  <ParaEl>{channelDataObj.subscriberCount}</ParaEl>
                </ContentContainer>
              </ChannelContainer>
              <ParaEl>{videoDetail.description}</ParaEl>
            </VideoContainer>
          );
        }}
      </NxtwatchContext.Consumer>
    );
  };

  const renderContent = () => {
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
            return renderVideoDetails;
          default:
            return null;
        }
      }}
    </NxtwatchContext.Consumer>;
  };

  return <div>{renderContent()}</div>;
};

export default VideoDetails;
