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

export type HomeStyle = {
  darkMode: boolean;
};

const HomeRoute = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };
  const onClearInput = () => {
    setSearchValue("");
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
                    searchValue={searchValue}
                    onChangeSearch={onChangeSearch}
                    clearInput={onClearInput}
                  />
                  <HomeContent searchValue={searchValue} />
                </HomePageRightSections>
              </HomePageContent>
            </HomePage>
          );
        }}
      </NxtwatchContext.Consumer>
    </>
  );
};

export default HomeRoute;
