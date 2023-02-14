import React from "react";
import { IoMdClose } from "react-icons/io";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  BannerBtn,
  BannerContainer,
  BannerImage,
  BannerImageContainer,
  BannerText,
} from "./styleComponets";

const Banner = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { closeBanner } = value;
        return (
          <BannerContainer>
            <BannerImageContainer>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="logo"
              />
              <IoMdClose onClick={closeBanner} />
            </BannerImageContainer>
            <BannerText>Buy Nxt Watch Premium prepaid plan with UPI</BannerText>
            <BannerBtn>GET IT NOW</BannerBtn>
          </BannerContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default Banner;
