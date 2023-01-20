import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Button, Post } from "components";
import { fetchPostsByUser } from "api/fetchPosts";
import { IPost } from "types/interfaces";

import preview from "assets/wave.jpg";

import "./styles.scss";
import { useAuth } from "hooks";
import { fetchFollowed, fetchFollowers } from "api/followSystem";

export const Profile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [followed, setFollowed] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { id } = useParams<string>();
  const { user } = useAuth();

  const getPosts = async () => {
    try {
      const { data } = await fetchPostsByUser(id);
      setPosts(data.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getFollowed = async () => {
    try {
      const { data } = await fetchFollowed();
      setFollowed(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getFollowers = async () => {
    try {
      const { data } = await fetchFollowers();
      setFollowers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
    getFollowed();
    getFollowers();
  }, []);

  return (
    <div className="profile">
      <div className="profile__navigation">
        <ArrowBackIcon className="profile__arrow" />
        <div className="profile__user-info">
          <h1 className="profile__username">{user.name}</h1>
          <p className="profile__post-count">{posts.length} posts</p>
        </div>
      </div>
      <div className="profile__user">
        <img src={preview} alt="preview" className="profile__preview" />
        <img src={user.photo} alt="user" className="profile__user-photo" />
        <Button
          text="Change user info"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          style="user"
        />
        <p className="profile__name">{user.name}</p>
        <p className="profile__usertag">{user.email}</p>
        <h3 className="profile__description">Description</h3>
        <div className="profile__followers">
          <div className="profile__followed">
            <p className="profile__counter">{followed.length}</p>
            <p>followed</p>
          </div>
          <div className="profile__follower">
            <p className="profile__counter">{followers.length}</p>
            <p>followers</p>
          </div>
        </div>
        <div className="profile__posts">
          <h1 className="profile__posts-laber">Posts</h1>
          {posts.length !== 0 &&
            posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
      </div>
    </div>
  );
};
