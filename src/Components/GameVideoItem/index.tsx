import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { GamingContentType } from "../GamingContent";
import { ContainerLink } from "../SavedVideoItem/styleComponets";
import {
  GameItemContainer,
  GameItemImage,
  GameItemTitle,
  GameItemViewCount,
} from "./styleComponents";

interface GameVideoPr {
  data: GamingContentType;
}

export type GameVideItemStyle = {
  darkMode: boolean;
};

const GameVideoItem: React.FC<GameVideoPr> = (props) => {
  const { data } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <ContainerLink
            to={"/video/" + data.id}
            className="nxtwatch-gamevideo-item"
          >
            <GameItemContainer>
              <GameItemImage src={data.thumbnailUrl} />
              <GameItemTitle darkMode={isDarkMode}>{data.title}</GameItemTitle>
              <GameItemViewCount darkMode={isDarkMode}>
                {data.viewCount} Watching Worldwide
              </GameItemViewCount>
            </GameItemContainer>
          </ContainerLink>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default GameVideoItem;
