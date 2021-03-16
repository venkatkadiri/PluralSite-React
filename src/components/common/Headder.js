import React from "react";
import { NavLink } from "react-router-dom";

const Headder = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        {" "}
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        {" "}
        About
      </NavLink>
    </nav>
  );
};
export default Headder;
