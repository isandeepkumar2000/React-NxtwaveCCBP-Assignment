import { Link, Redirect, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import { MdOutlineLogout } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { JobbyHeaderContainer } from "./stylecomponets";
// import { HeaderGlobalStyle } from "./stylecomponets";

const Header = () => {
  const history = useHistory();

  const logoutFromApp = () => {
    Cookies.remove("jobby_app_jwt_token");
    history.replace("/");
    // return <Redirect to="/login" />;
  };

  return (
    <>
      <JobbyHeaderContainer className="header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="logo img"
            className="header-logo-img"
          />
        </Link>
        <div className="home-jobs-lg-nav-items-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </div>
        <button className="logout-btn" onClick={logoutFromApp}>
          Logout
        </button>
        <div className="home-jobs-sm-nav-icons-container">
          <Link to="/">
            <AiFillHome fill="white" className="sm-nav-icon" />
          </Link>
          <Link to="/jobs">
            <BsBriefcaseFill fill="white" className="sm-nav-icon" />
          </Link>
          <MdOutlineLogout
            fill="white"
            className="sm-nav-icon"
            onClick={logoutFromApp}
          />
        </div>
      </JobbyHeaderContainer>
    </>
  );
};

export default withRouter(Header);
