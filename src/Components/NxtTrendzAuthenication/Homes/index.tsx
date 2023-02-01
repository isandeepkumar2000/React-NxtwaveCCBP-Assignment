import Cookies from "js-cookie";
import React from "react";
import { Redirect } from "react-router-dom";
import HeaderPage from "../Header";
import {
  ButtonShopNow,
  NxtParaName,
  NxtTitleName,
  NxtTrendzContainer,
  NxtTrendzItems,
  TextAreaNxt,
} from "./styleComponets";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderPage />
      <NxtTrendzContainer className="NxtTrendzContainer">
        <NxtTrendzItems>
          <TextAreaNxt className="textArea">
            <div>
              <NxtTitleName>Clothes That Get YOU Noticed</NxtTitleName>
            </div>
            <div>
              <NxtParaName>
                Fashion is part of the daily air and it does not quite help that
                it changes all the time. Clothes have always been a marker of
                the era and we are in a revolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </NxtParaName>
            </div>
            <ButtonShopNow type="button">Shop Now</ButtonShopNow>
          </TextAreaNxt>
          <div className="Image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="photo-Home"
            />
          </div>
        </NxtTrendzItems>
      </NxtTrendzContainer>
    </>
  );
};

export default Home;
