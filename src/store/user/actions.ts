import { UserActionTypes, UserType } from "./types.ts";
import { userAPI } from "../services.ts";

export const loginSuccess = (userData: UserType) => ({
  type: UserActionTypes.LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await userAPI.login(credentials);
    const userData = response.data;
    dispatch(loginSuccess(userData));
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
