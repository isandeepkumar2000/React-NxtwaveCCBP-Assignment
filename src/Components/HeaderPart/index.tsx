import { Link, Redirect, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import NxtwatchContext from "../../Contexts/NxtWatchContexts";

const HeaderNxtwatch = () => {
  const history = useHistory();

  const logoutFromApp = () => {
    Cookies.remove("jobby_app_jwt_token");
    history.replace("/");
    // return <Redirect to="/login" />;
  };

  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <div className="header-container">
            <Link to="/">
              <img
                src={
                  isDarkMode
                    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                }
                alt="logo img"
                className="header-logo-img"
              />
            </Link>
            <div className="home-jobs-lg-nav-items-container">
              <div>
                <img
                  src={
                    isDarkMode
                      ? "https://i.ibb.co/XbKMghK/Moon-Light.png"
                      : "https://i.ibb.co/5stT1N8/SunDark.png"
                  }
                  alt="BackGroundChanger"
                />

                <Link to="/contact" className="nav-link">
                  <img src="" alt="" />
                </Link>
              </div>
            </div>
            <div className="home-jobs-sm-nav-icons-container">
              <div></div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="Profile"
                />
              </div>
              <div>
                <button className="sm-nav-icon" onClick={logoutFromApp}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default HeaderNxtwatch;
