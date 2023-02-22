import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";

import SideBar from "../../Components/SideBar";
import TrendingContent from "../../Components/TrendingContent";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { TrendingContentStore } from "../../MobxStore/TrendingContentStore";
import {
  TrendingPage,
  TrendingPageContent,
  TrendingPageRightSection,
} from "./syleComponets";

export type TrendingRouteStyle = {
  darkMode: boolean;
};

const TrendingRoute = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <TrendingPage darkMode={isDarkMode}>
            <NavBar />
            <TrendingPageContent>
              <SideBar />
              <TrendingPageRightSection darkMode={isDarkMode}>
                <TrendingContent
                  trendingContentStore={new TrendingContentStore()}
                />
              </TrendingPageRightSection>
            </TrendingPageContent>
          </TrendingPage>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default TrendingRoute;
