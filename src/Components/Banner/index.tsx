import React from "react";
import { IoMdClose } from "react-icons/io";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import {
  BannerBtn,
  BannerContainer,
  BannerImage,
  BannerImageContainer,
  BannerText,
} from "./styleComponets";

const Banner = () => {
  const { t } = useTranslation();
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
            <BannerText>
              {t("Buy Nxt Watch Premium prepaid plan with UPI")}
            </BannerText>
            <BannerBtn>{t("get_it_now")}</BannerBtn>
          </BannerContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default withTranslation()(Banner);
