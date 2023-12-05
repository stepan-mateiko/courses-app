export const enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  GET_USER_INFO = "GET_USER_INFO",
}

interface LoginSuccess {
  type: UserActionTypes.LOGIN;
  payload: {
    name: string;
    email: string;
    token: string;
    role: string;
  };
}

export interface UserType {
  name: string;
  email: string;
  token: string;
  role: string;
}

interface Logout {
  type: UserActionTypes.LOGOUT;
}

interface GetUserInfo {
  type: UserActionTypes.GET_USER_INFO;
  payload: {
    name: string;
    email: string;
    token: string;
    role: string;
  };
}

export type UserAction = LoginSuccess | Logout | GetUserInfo;
