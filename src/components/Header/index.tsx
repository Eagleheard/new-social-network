import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import { NavLink } from "react-router-dom";

import { Button } from "components/Button";

import icon from "assets/icon.png";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__links">
        <img src={icon} className="header__icon" />
        <NavLink to="/" className="header__link link">
          <HomeIcon fontSize="large" />
          <li className="header__link-label">Home</li>
        </NavLink>
        <NavLink to="/news" className="header__link link">
          <TagIcon fontSize="large" />
          <li className="header__link-label">News</li>
        </NavLink>
        <Button text="New message" onClick={() => 1} style="message" />
        <Button text="Login" onClick={() => 1} style="header" />
      </ul>
    </header>
  );
};
