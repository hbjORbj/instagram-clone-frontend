import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import AuthContainer from "../Routes/Auth/AuthContainer";
import SearchContainer from "../Routes/Search/SearchContainer";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={SearchContainer} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={AuthContainer} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
