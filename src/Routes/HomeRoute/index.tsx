import React, { useState } from "react";
import Banner from "../../Components/Banner";
import HeaderNxtwatch from "../../Components/NavBar";
import HomeContent from "../../Components/HomeContant";
import SearchBar from "../../Components/SearchBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  HomePage,
  HomePageContent,
  HomePageRightSections,
} from "./styleComponents";
import { HomeContentStore } from "../../MobxStore/HomeContentStore";

export type HomeStyle = {
  darkMode: boolean;
};

interface HomeRoutes {
  homeContentContainerRoute: HomeContentStore;
}

const homeContentStore = new HomeContentStore();

const HomeRoutes = (props: HomeRoutes) => {
  const { homeContentContainerRoute } = props;

  const onChangeSearch = (value: string) => {
    homeContentContainerRoute.setSearchValue(value);
  };
  const onClearInput = () => {
    homeContentContainerRoute.setSearchValue("");
  };

  return (
    <>
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode, showBanner } = value;
          return (
            <HomePage darkMode={isDarkMode}>
              <HeaderNxtwatch />
              <HomePageContent>
                <SideBar />
                <HomePageRightSections>
                  {showBanner && <Banner />}
                  <SearchBar
                    // searchValue={homeContentContainerRoute.searchValue}
                    homeContentStore={homeContentStore}
                    onChangeSearch={onChangeSearch}
                    clearInput={onClearInput}
                  />
                  <HomeContent homeContentStore={homeContentStore} />
                </HomePageRightSections>
              </HomePageContent>
            </HomePage>
          );
        }}
      </NxtwatchContext.Consumer>
    </>
  );
};

export default HomeRoutes;
