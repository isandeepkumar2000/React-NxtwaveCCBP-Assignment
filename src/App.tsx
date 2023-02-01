import React from "react";

import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import CartPage from "./Components/NxtTrendzAuthenication/Carts";
import Home from "./Components/NxtTrendzAuthenication/Homes";
import LoginForm from "./Components/NxtTrendzAuthenication/LoginForm";
import NotFound from "./Components/NxtTrendzAuthenication/NotFound";
import ProductsPage from "./Components/NxtTrendzAuthenication/Products";
import ProtectedRoute from "./Components/NxtTrendzAuthenication/ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/products" component={ProductsPage} />
          <ProtectedRoute exact path="/cart" component={CartPage} />
          <ProtectedRoute exact path="/not-Found" component={NotFound} />
          <ProtectedRoute exact path="/" component={Home} />
          <Redirect to="/not-Found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
