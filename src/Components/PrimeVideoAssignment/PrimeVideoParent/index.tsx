import React from "react";
import moviesList from "../MovieListFolder/Index";
import MovieSlider from "../MoviesSlider";
// import "./style.css";
import {
  GlobalStyle,
  PrimeVideoAction,
  PrimeVideoActionDiv,
  PrimeVideoActionDivMain,
  PrimeVideoImage,
} from "./stylecomponts";

const PrimeVideo = () => {
  const renderActionMovieList = () => {
    const actionMovies = moviesList.filter(
      (items) => items.categoryId === "ACTION"
    );
    return (
      <div>
        <MovieSlider FilterMoviesList={actionMovies} />
      </div>
    );
  };

  const renderComedyMovieList = () => {
    const comedyMovies = moviesList.filter(
      (items) => items.categoryId === "COMEDY"
    );
    return (
      <div>
        <MovieSlider FilterMoviesList={comedyMovies} />
      </div>
    );
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <div>
          <div>
            <PrimeVideoImage
              src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
              alt="prime-video"
            />
          </div>
          <div>
            <PrimeVideoActionDivMain>
              <PrimeVideoAction>Action Movies</PrimeVideoAction>
              <PrimeVideoActionDiv className={"sandeep"}>
                {renderActionMovieList()}
              </PrimeVideoActionDiv>
            </PrimeVideoActionDivMain>
            <PrimeVideoActionDivMain>
              <PrimeVideoAction>Comedy Movies</PrimeVideoAction>
              <PrimeVideoActionDiv className="ComedyList">
                {renderComedyMovieList()}
              </PrimeVideoActionDiv>
            </PrimeVideoActionDivMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimeVideo;
