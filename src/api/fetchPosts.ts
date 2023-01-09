import axios from "axios";

export const fetchPosts = () => {
  return axios.get(`http://localhost:7000/api/posts`, {
    withCredentials: true,
  });
};
