import React from "react";

import { SignIn } from "components/Authorization";

import "./styles.scss";

export const Preview = () => {
  return (
    <div className="preview__container">
      <div className="preview">
        <div className="preview__description">description</div>
        <div className="preview__login">
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
