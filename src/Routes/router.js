import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Components/Header/header";
import HomePage from "../Components/HomePage/homePage";
import DetailPage from "../Components/DetailPage/detailPage";
import pathConstants from '../Constants/pathConstants'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path={pathConstants.HOME_ROUTE}
          component={HomePage}
          exact={true}
        />
        <Route
          path={pathConstants.DETAIL_PAGE_ROUTE}
          component={DetailPage}
          exact={true}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
