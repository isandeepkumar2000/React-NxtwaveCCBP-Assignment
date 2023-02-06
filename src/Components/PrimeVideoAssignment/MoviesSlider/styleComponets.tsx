import styled from "styled-components";

const sliderSettings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,

        dot: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dot: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

        dot: true,
      },
    },
  ],
};

export default sliderSettings;
