import React, { useEffect, useState } from "react";

import { fetchPosts } from "api/fetchPosts";
import { IPost } from "types/interfaces";
import { Input, Post } from "components";

import "./styles.scss";

export const Content = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const { data } = await fetchPosts();
      setPosts(data.rows);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="content">
      <h1 className="content__label">Home</h1>
      <div className="content__new-post">
        <img
          alt="userPhoto"
          className="content__user-photo"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
        <Input />
      </div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
