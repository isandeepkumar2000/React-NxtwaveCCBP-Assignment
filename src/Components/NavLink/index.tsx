import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { NavLink } from "react-router-dom";
import "./index.css";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiPlayListAddFill } from "react-icons/ri";
import { NavLinksContainer, NavLinkText } from "./styleComponents";
import { useTranslation } from "react-i18next";

export type NavLinkType = {
  darkMode: boolean;
};

const NavLinkNxtwatch = () => {
  const { t } = useTranslation();
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <NavLinksContainer>
            <NavLink
              exact
              to="/"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <AiFillHome className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>{t("Home")}</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/trending"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <AiFillFire className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>{t("Trending")}</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/gaming"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <IoLogoGameControllerB className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>{t("Gaming")}</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/savedVideos"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <RiPlayListAddFill className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>
                {t("Saved Videos")}
              </NavLinkText>
            </NavLink>
          </NavLinksContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default NavLinkNxtwatch;
