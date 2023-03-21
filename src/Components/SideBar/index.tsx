import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import ContactUs from "../ContactOus";
import NavLinkNxtwatch from "../NavLink";
import { SideBarPage } from "./styleComponets";


const SideBar = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <SideBarPage darkMode={isDarkMode}>
            <NavLinkNxtwatch />
            <ContactUs />
          </SideBarPage>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default SideBar;
