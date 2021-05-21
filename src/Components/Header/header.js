import React from "react";
import { NavLink } from "react-router-dom";

import ROUTES from "../../Constants/pathConstants";
import "./header.css";
import "../app.css";

const Header = () => {

  return (
    <nav className="navbar">
        <div>
          <NavLink className="menu" to={ROUTES.HOME_ROUTE}>
            Terminal
          </NavLink>
          <NavLink className="menu" to={ROUTES.DETAIL_PAGE_ROUTE}>
            Terminal Detail
          </NavLink>
        </div>
    </nav>
  );
};

export default Header;
