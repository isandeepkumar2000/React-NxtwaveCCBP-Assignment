import React from "react";
import MovieItem from "../MovieItems/Index";
import Slider from "react-slick";
import sliderSettings from "./styleComponets";

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

  return (
    <div>
      <Slider {...sliderSettings}>
        {FilterMoviesList.map((eachItem: movieListItemsType) => (
          <MovieItem data={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
