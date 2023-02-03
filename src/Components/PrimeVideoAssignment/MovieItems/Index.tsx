import React, { ReactNode } from "react";
import { movieListItemsType } from "../MoviesSlider";
import Popup from "reactjs-popup";
import Player from "react-player";
import { IoMdClose } from "react-icons/io";

interface MovieItemsPp {
  data: movieListItemsType;
}

const MovieItem: React.FC<MovieItemsPp> = (props) => {
  const { data } = props;
  const { id, thumbnailUrl, videoUrl } = data;
  return (
    <div>
      <Popup
        trigger={
          <div className="">
            <img src={thumbnailUrl} alt={id} />
          </div>
        }
        className="popup-content"
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              close
            </button>
            <Player
              url={videoUrl}
              controls
              className="prime-video-player"
              width="93%"
            />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MovieItem;
