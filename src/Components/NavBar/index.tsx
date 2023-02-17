import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { FiLogOut } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";

import { useHistory } from "react-router-dom";
import {
  Avatar,
  DarkModeImage,
  HamburgerBtn,
  LogoutBtn,
  MobileLogoutBtn,
  Nav,
  NavContent,
  NavLinkContainer,
  NavRightSection,
  WebsiteLogo,
} from "./styleComponents";
import LogoutPopup from "../LogoutPopUp";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import NavLinkNxtwatch from "../NavLink";
import { jwtToken } from "../../Constants/appConstants";
export type NavBarStyle = {
  darkMode: boolean;
};

const NavBar = () => {
  let history = useHistory();
  const logoutHandler = () => {
    Cookies.remove(jwtToken);
    history.replace("/Nxtwatch/login");
  };

  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode, toggleDarkMode } = value;
        return (
          <Nav darkMode={isDarkMode}>
            <NavContent>
              <Link to="/Nxtwatch">
                <WebsiteLogo
                  src={
                    isDarkMode
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  }
                  alt="website logo"
                />
              </Link>
              <NavRightSection>
                <div onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <DarkModeImage
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="dark"
                    />
                  ) : (
                    <DarkModeImage
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="light"
                    />
                  )}
                </div>
                <Popup
                  modal
                  trigger={
                    <HamburgerBtn darkMode={isDarkMode}>
                      <GiHamburgerMenu className="nxtwatch-hamberger-menu" />
                    </HamburgerBtn>
                  }
                  className={`nxtwatch-ham-popup ${
                    isDarkMode ? "dark-nxtwatch-ham-popup" : ""
                  }`}
                >
                  {(close: Function) => (
                    <div>
                      <HamburgerBtn darkMode={isDarkMode}>
                        <IoMdClose
                          onClick={() => close()}
                          className="hamburger-close-icon"
                        />
                      </HamburgerBtn>
                      <NavLinkContainer>
                        <NavLinkNxtwatch />
                      </NavLinkContainer>
                    </div>
                  )}
                </Popup>
                <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                <Popup
                  modal
                  trigger={<LogoutBtn darkMode={isDarkMode}>Logout</LogoutBtn>}
                  className={`nxtwatch-logout-popup ${
                    isDarkMode ? "dark-nxtwatch-logout-popup" : ""
                  }`}
                >
                  {(close: () => void) => (
                    <LogoutPopup onClose={close} onConfirm={logoutHandler} />
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <MobileLogoutBtn darkMode={isDarkMode}>
                      <FiLogOut className="mobile-logout-btn" />
                    </MobileLogoutBtn>
                  }
                  className={`nxtwatch-logout-popup ${
                    isDarkMode ? "dark-nxtwatch-logout-popup" : ""
                  }`}
                >
                  {(close: () => void) => (
                    <LogoutPopup onClose={close} onConfirm={logoutHandler} />
                  )}
                </Popup>
              </NavRightSection>
            </NavContent>
          </Nav>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default withRouter(NavBar);
