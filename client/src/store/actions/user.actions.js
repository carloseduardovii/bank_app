import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "http://localhost:4000/api/v1/users/login";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const res = await axios.post(API_URL);
      const { user } = res.data;
      console.log(res);

      dispatch(usersActions.login({ user }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
		const newUser = { name, password }
		const res = axios.post(API_URL, newUser)
		const { user }

    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
