import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import React from "react";
import { Link , withRouter} from "react-router-dom";
import {
  HeaderContainerNxt,
  HeaderImage,
  HeaderItemsNxt,
  HeaderNavBArOptions,
  HeaderNavOptionButton,
  HeaderNavOptionItems,
} from "./styleComponents";

const HeaderPage = () => {
  const history = useHistory();
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    history.replace("/home");
  };
  return (
    <HeaderContainerNxt>
      <HeaderItemsNxt>
        <div className="Image-Container">
          <HeaderImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website Logo"
          />
        </div>
        <div className="nav-Details">
          <HeaderNavBArOptions>
            <HeaderNavOptionItems>
              <Link className="link" to="/">
                Home
              </Link>
            </HeaderNavOptionItems>
            <HeaderNavOptionItems>
              <Link to="/products">Product</Link>
            </HeaderNavOptionItems>
            <HeaderNavOptionItems>
              <Link to="/cart">Card</Link>
            </HeaderNavOptionItems>
            <HeaderNavOptionButton>
              <Link to="/login" onClick={onClickLogout}>
                Logout
              </Link>
            </HeaderNavOptionButton>
          </HeaderNavBArOptions>
        </div>
      </HeaderItemsNxt>
    </HeaderContainerNxt>
  );
};

export default withRouter(HeaderPage);
