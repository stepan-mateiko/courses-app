export const enum UserActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT = "LOGOUT",
}

interface LoginSuccess {
  type: UserActionTypes.LOGIN_SUCCESS;
  payload: {
    name: string;
    email: string;
    token: string;
  };
}

export interface UserType {
  name: string;
  email: string;
  token: string;
}

interface Logout {
  type: UserActionTypes.LOGOUT;
}

export type UserAction = LoginSuccess | Logout;
