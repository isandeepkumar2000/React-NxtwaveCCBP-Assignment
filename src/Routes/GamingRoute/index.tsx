import React, { useEffect, useState } from "react";
import GamingContent from "../../Components/GamingContent";
import HeaderNxtwatch from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { GamingContentStore } from "../../MobxStore/GamingContentStore";
import {
  GamingPage,
  GamingPageContent,
  GamingPageRightSection,
} from "./styleComponents";

export type GamingRoutes = {
  darkMode: boolean;
};

const GamingRoute = () => {
  return (
    <>
      <NxtwatchContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <GamingPage darkMode={isDarkMode}>
              <HeaderNxtwatch />
              <GamingPageContent>
                <SideBar />
                <GamingPageRightSection darkMode={isDarkMode}>
                  <GamingContent
                    gamingContentStore={new GamingContentStore()}
                  />
                </GamingPageRightSection>
              </GamingPageContent>
            </GamingPage>
          );
        }}
      </NxtwatchContext.Consumer>
    </>
  );
};

export default GamingRoute;
