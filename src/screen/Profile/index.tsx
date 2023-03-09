import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useAuth } from "hooks";
import { fetchFollowed, fetchFollowers } from "api/followSystem";
import { Button, Post, UserCard } from "components";
import { fetchPostsByUser } from "api/fetchPosts";
import { IPost, IUser } from "types/interfaces";

import preview from "assets/wave.jpg";

import "./styles.scss";
import { profileOption } from "types/enumerators";

export const Profile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [followed, setFollowed] = useState<IUser[]>([]);
  const [followers, setFollowers] = useState<IUser[]>([]);
  const [isPostsVisible, setIsPostsVisible] = useState(true);
  const [isFollowersVisible, setIsFollowersVisible] = useState(false);
  const [isFollowedsVisible, setIsFollowedsVisible] = useState(false);
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

  const handleSwitch = (option: string) => {
    switch (option) {
      case profileOption.POSTS:
        setIsPostsVisible(true);
        setIsFollowedsVisible(false);
        setIsFollowersVisible(false);
        break;
      case profileOption.FOLLOWED:
        setIsPostsVisible(false);
        setIsFollowedsVisible(true);
        setIsFollowersVisible(false);
        break;
      case profileOption.FOLLOWERS:
        setIsPostsVisible(false);
        setIsFollowedsVisible(false);
        setIsFollowersVisible(true);
        break;
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
          <p
            className={classNames("profile__link", {
              "profile__link--active": isPostsVisible === true,
            })}
            onClick={() => handleSwitch(profileOption.POSTS)}
          >
            posts
          </p>
          <div
            className={classNames("profile__link", {
              "profile__link--active": isFollowedsVisible === true,
            })}
            onClick={() => handleSwitch(profileOption.FOLLOWED)}
          >
            <p className="profile__counter">{followed.length}</p>
            <p className="profile__link-label">followed</p>
          </div>
          <div
            className={classNames("profile__link", {
              "profile__link--active": isFollowersVisible === true,
            })}
            onClick={() => handleSwitch(profileOption.FOLLOWERS)}
          >
            <p className="profile__counter">{followers.length}</p>
            <p className="profile__link-label">followers</p>
          </div>
        </div>
        {isPostsVisible && (
          <div className="profile__posts">
            <h1 className="profile__posts-laber">Posts</h1>
            {posts.length !== 0 &&
              posts.map((post) => <Post key={post.id} {...post} />)}
          </div>
        )}
        {isFollowedsVisible && (
          <div className="profile__followeds-list">
            {followed.map((followed) => (
              <UserCard key={followed.id} {...followed} />
            ))}
          </div>
        )}
        {isFollowersVisible && (
          <div className="profile__followers-list">
            {followers.map((follower) => (
              <UserCard key={follower.id} {...follower} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
