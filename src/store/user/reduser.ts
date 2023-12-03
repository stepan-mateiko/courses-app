import { UserAction, UserActionTypes } from "./types.ts";

export const userInitialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token") || "",
  role: "",
};

export function userReducer(state = userInitialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
        token: "",
      };
    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
      };
    default:
      return state;
  }
}
