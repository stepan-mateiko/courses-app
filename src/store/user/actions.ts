// user/actions.ts

import { UserActionTypes, UserType } from "./types.ts";
import { userAPI } from "../services.ts";

export const loginSuccess = (userData: UserType) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: userData,
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await userAPI.login(credentials);
    const userData = response.data; // Assuming your API returns user data
    dispatch(loginSuccess(userData));
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await userAPI.logout();
    dispatch(logout());
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};
