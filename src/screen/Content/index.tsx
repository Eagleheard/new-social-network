import { Input } from "components";
import React from "react";

import "./styles.scss";

export const Content = () => {
  return (
    <div className="content">
      <h1 className="content__label">Home</h1>
      <div className="content__new-post">
        <img
          className="content__user-photo"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
        <Input />
      </div>
    </div>
  );
};
