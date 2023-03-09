import axios from "axios";

import { IUser } from "./../types/interfaces";

export const registration = (params: IUser) => {
  return axios.put(`http://localhost:7000/api/user/signup`, params, {
    withCredentials: true,
  });
};

export const login = (params?: IUser) => {
  return axios.put(`http://localhost:7000/api/user/login`, params, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
};

export const authorization = () => {
  return axios.get(`http://localhost:7000/api/user/auth`, {
    withCredentials: true,
  });
};

export const logout = () => {
  return axios.put("http://localhost:7000/api/user/logout", null, {
    withCredentials: true,
  });
};
