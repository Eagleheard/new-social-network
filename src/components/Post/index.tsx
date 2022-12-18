import React from "react";

import { IPost } from "types/interfaces";

import "./styles.scss";

export const Post: React.FC<IPost> = ({ photo, nickname, post }) => {
  return (
    <div className="post">
      <img src={photo} alt="user" className="post__user-photo" />
      <div className="post__user">
        <p className="post__nickname">{nickname}</p>
        <p className="post__message">{post}</p>
      </div>
    </div>
  );
};
