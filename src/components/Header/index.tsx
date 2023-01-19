import React, { useEffect, useRef, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

import { useAuth, useClickOutside, useToast } from "hooks";
import { authorization, logout } from "api/authorization";
import { ToastOptions } from "types/enumerators";
import { Button } from "components/Button";

import icon from "assets/icon.png";

import "./styles.scss";

export const Header = () => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const { user, setUser } = useAuth();
  const { openToast } = useToast();
  const logoutRef = useRef(null);

  const outsideClick = () => {
    setIsLogoutVisible(false);
  };

  useClickOutside(logoutRef, outsideClick);

  const checkUser = async () => {
    try {
      const { data } = await authorization();
      setUser(data);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      if (message !== "Need authorization") {
        openToast(String(message), ToastOptions.error);
      }
    }
  };

  const signOut = () => {
    logout();
    setUser(null);
  };

  useEffect(() => {
    checkUser();
  }, []);

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
        <NavLink to="/profile" className="header__link link">
          <PersonIcon fontSize="large" />
          <li className="header__link-label">Profile</li>
        </NavLink>
        <Button text="New message" onClick={() => 1} style="message" />
        <div className="header__user">
          {isLogoutVisible && (
            <div className="header__logout">
              <Button text="Logout" onClick={signOut} style="logout" />
            </div>
          )}
          <div
            ref={logoutRef}
            className="header__profile"
            onClick={() => setIsLogoutVisible(true)}
          >
            <img src={user.photo} className="header__profile-photo" />
            <div>
              <p className="header__profile-name">{`${user.name} ${user.lastName}`}</p>
              <p className="header__profile-email">{user.email}</p>
            </div>
            <h2 className="header__dots">...</h2>
          </div>
        </div>
      </ul>
    </header>
  );
};
