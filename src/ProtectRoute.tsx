import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";
import { jwtToken } from "./Constants/appConstants";

const ProtectedRoute = (props: any) => {
  const token = Cookie.get(jwtToken);
  if (token === undefined) {
    return <Redirect to="/Nxtwatch/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;