import React from "react";
import Account from "./Account";
import classes from "../styles/Nav.module.css";
import Logo from "../assets/images/logo-bg.png";
const Nav = () => {
  return (
    <nav class={classes.nav}>
      <ul>
        <li>
          <a href="index.html" class={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
