import React from "react";

import { SignIn } from "components/Authorization";

import "./styles.scss";

export const Preview = () => {
  return (
    <div className="preview__container">
      <div className="preview">
        <div className="preview__description">description</div>
        <div className="preview__login">
          <h1 className="preview__welcome">Hello Again!</h1>
          <p className="preview__welcome-description">
            First of all you need to login!
          </p>
          <SignIn
            handleSwitch={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};
