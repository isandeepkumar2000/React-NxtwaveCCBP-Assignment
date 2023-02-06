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
    <Popup
      trigger={
        <div className="prime-video-movie-image">
          <img src={thumbnailUrl} alt={id} />
        </div>
      }
      modal
      nested
    >
      <>
        {/* {(close: (event: any) => void) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button> */}

        <div className="content">
          <IoMdClose className="prime-close-popup" />
          <div>
            <Player url={videoUrl} controls width="93%" />
          </div>
        </div>
        {/* </div>
        )} */}
      </>
    </Popup>
  );
};

export default MovieItem;
