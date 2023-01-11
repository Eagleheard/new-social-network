import React from "react";

import { IPost } from "types/interfaces";

import "./styles.scss";

export const Post: React.FC<IPost> = ({ user, comment }) => {
  return (
    <div className="post">
      <img src={user.photo} alt="user" className="post__user-photo" />
      <div className="post__user">
        <p className="post__nickname">
          {user.name} {user.lastName}
        </p>
        <p className="post__message">{comment}</p>
      </div>
    </div>
  );
};
