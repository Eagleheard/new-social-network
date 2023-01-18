import React, { useState } from "react";

import { SignIn, SignUp } from "components/Authorization";

import preview from "assets/preview.png";

import "./styles.scss";

export const Preview = () => {
  const [isSignInVisible, setIsSignInVisible] = useState<boolean>(true);
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false);

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
  return (
    <div className="preview__container">
      <div className="preview">
        <div className="preview__description">
          <img className="preview__image" src={preview} alt="preview" />
          <h1 className="preview__description-text">Chatting together!</h1>
        </div>
        <div className="preview__login">
          <h1 className="preview__welcome">Hello Again!</h1>
          <p className="preview__welcome-description">
            First of all you need to login!
          </p>
          {isSignInVisible ? (
            <SignIn handleSwitch={handleSwitch} />
          ) : (
            <SignUp handleSwitch={handleSwitch} />
          )}
        </div>
      </div>
    </div>
  );
};
