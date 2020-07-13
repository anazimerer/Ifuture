import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SplashScreen from "./components/SplashScreen";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AddressPage from "./components/AddressPage";
import FeedPage from "./components/FeedPage";
import SearchPage from "./components/SearchPage";
import RestaurantPage from "./components/RestaurantPage";
import CartPage from "./components/CartPage";
import OrdersPage from "./components/OrdersPage";
import ProfilePage from "./components/ProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <ProtectedRoute exact path="/address" component={AddressPage} />
        <ProtectedRoute exact path="/restaurants" component={FeedPage} />
        <ProtectedRoute exact path="/search" component={SearchPage} />
        <ProtectedRoute
          exact
          path="/restaurant/:restaurantId"
          component={RestaurantPage}
        />
        <ProtectedRoute exact path="/cart" component={CartPage} />
        <ProtectedRoute exact path="/orders" component={OrdersPage} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
