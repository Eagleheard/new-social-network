import axios from "axios";

export const fetchFollowed = () => {
  return axios.get(`http://localhost:7000/api/friends/following`, {
    withCredentials: true,
  });
};

export const fetchFollowers = () => {
  return axios.get(`http://localhost:7000/api/friends/followers`, {
    withCredentials: true,
  });
};
