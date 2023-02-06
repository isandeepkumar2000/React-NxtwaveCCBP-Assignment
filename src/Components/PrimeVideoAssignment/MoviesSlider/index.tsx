import React from "react";
import MovieItem from "../MovieItems/Index";
import Slider from "react-slick";
import sliderSettings from "./styleComponets";
import "./style.css";

export type movieListItemsType = {
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  categoryId: string;
};
interface propType {
  FilterMoviesList: movieListItemsType[];
}

const MovieSlider: React.FC<propType> = (props) => {
  const { FilterMoviesList } = props;
  // const settings = {
  //   dots: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="MoviesSlider_Container">
      <Slider {...sliderSettings}>
        {FilterMoviesList.map((eachItem: movieListItemsType) => (
          <MovieItem data={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
