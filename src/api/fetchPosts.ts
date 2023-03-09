import axios from "axios";

export const fetchPosts = () => {
  return axios.get(`http://localhost:7000/api/posts`, {
    withCredentials: true,
  });
};

export const fetchPostsByUser = (id?: string) => {
  return axios.get(`http://localhost:7000/api/posts/${id}`, {
    withCredentials: true,
  });
};
