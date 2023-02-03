import React from "react";
import moviesList from "../MovieListFolder/Index";
import MovieSlider, { movieListItemsType } from "../MoviesSlider";

const PrimeVideo = () => {
  const renderActionMovieList = () => {
    const actionMovies = moviesList.filter(
      (items) => items.categoryId === "ACTION"
    );
    return <MovieSlider FilterMoviesList={actionMovies} />;
  };

  const renderComedyMovieList = () => {
    const comedyMovies = moviesList.filter(
      (items) => items.categoryId === "COMEDY"
    );
    return <MovieSlider FilterMoviesList={comedyMovies} />;
  };
  return (
    <div>
      <div className="prime-video-page">
        <div className="prime-video-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime-video"
          />
        </div>
        <div className="movie-sliders-container">
          <div>
            <span className="movie-slider-heading">Action Movies</span>
            {renderActionMovieList()}
          </div>
          <div>
            <span className="movie-slider-heading">Comedy Movies</span>
            {renderComedyMovieList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeVideo;
