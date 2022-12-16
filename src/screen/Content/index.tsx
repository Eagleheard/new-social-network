import React from "react";

import { Input, Post } from "components";

import "./styles.scss";

const initialStore = [
  {
    photo: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    nickname: "User1",
    post: "Post1",
  },
  {
    photo: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    nickname: "User2",
    post: "Post2",
  },
  {
    photo: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    nickname: "User3",
    post: "Post3",
  },
  {
    photo: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    nickname: "User4",
    post: "Post4",
  },
  {
    photo: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    nickname: "User5",
    post: "Post5",
  },
];
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
      {initialStore.map((el) => (
        <Post key={el.post} {...el} />
      ))}
    </div>
  );
};
