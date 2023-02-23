import React from "react";
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
  VideoItemOtherDetailContainerss,
  VideoItemTitle,
} from "./styleComponents";
import { ContainerLink } from "../SavedVideoItem/styleComponets";

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
          <ContainerLink
            to={"/video/" + data.id}
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
                  <VideoItemOtherDetailContainerss darkMode={isDarkMode}>
                    <VideoItemOtherDetail>
                      {data.viewCount}
                    </VideoItemOtherDetail>
                    <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                    <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                  </VideoItemOtherDetailContainerss>
                </VideoItemDetail>
              </VideoItemContent>
            </VideoItem>
          </ContainerLink>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default HomeVideoItem;
