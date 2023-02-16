import React from "react";
import { Link } from "react-router-dom";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { GoPrimitiveDot } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import { VideoTypeList } from "../HomeContant";
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
} from "./styleComponents";

export type HomeVideoItemStyleComp = {
  darkMode: boolean;
};

interface HomeVideoPrp {
  data: VideoTypeList;
}

const HomeVideoItem: React.FC<HomeVideoPrp> = (props) => {
  const { data } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        const date = formatDistanceToNow(new Date(data.publishedAt), {
          addSuffix: true,
        });
        return (
          <Link
            to={"/Nxtwatch/video/" + data.id}
            className="nxtwatch-video-item"
          >
            <VideoItem>
              <VideoItemImage src={data.thumbnailUrl} alt="" />
              <VideoItemContent>
                <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                <VideoItemDetail>
                  <VideoItemTitle darkMode={isDarkMode}>
                    {data.title}
                  </VideoItemTitle>
                  <VideoItemChannel darkMode={isDarkMode}>
                    {data.channel.name}
                  </VideoItemChannel>
                  <VideoItemOtherDetailContainer darkMode={isDarkMode}>
                    <VideoItemOtherDetail>
                      {data.viewCount}
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
    </NxtwatchContext.Consumer>
  );
};

export default HomeVideoItem;
