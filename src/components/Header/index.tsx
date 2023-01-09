import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import { NavLink } from "react-router-dom";

import { useAuth, useToast } from "hooks";
import { authorization, logout } from "api/authorization";
import { ToastOptions } from "types/enumerators";
import { Portal } from "components";
import { SignIn, SignUp } from "components/Authorization";
import { Button } from "components/Button";

import icon from "assets/icon.png";

import "./styles.scss";

export const Header = () => {
  const [isSignInVisible, setIsSignInVisible] = useState<boolean>(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false);
  const { user, setUser } = useAuth();
  const { openToast } = useToast();

  const handleSwitch = () => {
    if (isSignInVisible) {
      setIsSignInVisible(false);
      setIsSignUpVisible(true);
      return;
    }
    if (isSignUpVisible) {
      setIsSignInVisible(true);
      setIsSignUpVisible(false);
      return;
    }
  };

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
        <Button text="New message" onClick={() => 1} style="message" />
        <Button
          text="Login"
          onClick={() => setIsSignInVisible((prevValue) => !prevValue)}
          style="header"
        />
      </ul>
      {isSignInVisible && !user && (
        <Portal
          Component={() => <SignIn handleSwitch={handleSwitch} />}
          isOpen={isSignInVisible}
          text="Sign In"
          handleClose={() => setIsSignInVisible(false)}
        />
      )}
      {isSignUpVisible && (
        <Portal
          Component={() => <SignUp handleSwitch={handleSwitch} />}
          isOpen={isSignUpVisible}
          text="Sign Up"
          handleClose={() => setIsSignUpVisible(false)}
        />
      )}
    </header>
  );
};
