import { AppThunk } from "../index.ts";
import { UserActionTypes, UserType } from "./types.ts";
import { userAPI } from "../services.ts";

export const loginUser = (credentials: UserType): AppThunk => {
  return async (dispatch) => {
    try {
      const response = await userAPI.login(credentials);

      localStorage.setItem("token", response.data.result);
      if (localStorage.getItem("token")) {
        const loggedUser = {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.result,
        };
        dispatch({ type: UserActionTypes.LOGIN, payload: loggedUser });
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };
};

export const getUserInfo = (token: string): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await userAPI.getUser(token);
      dispatch({
        type: UserActionTypes.GET_USER_INFO,
        payload: response.data.result,
      });
    } catch (error) {
      console.error("Error getting user info:", error.message);
    }
  };
};

export const logOut = (token: string): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      localStorage.removeItem("token");
      const response = await userAPI.logOut(token);
      if (response.status === 200) {
        dispatch({
          type: UserActionTypes.LOGOUT,
        });
      }
    } catch (error) {
      console.error("Error logout:", error.message);
    }
  };
};
