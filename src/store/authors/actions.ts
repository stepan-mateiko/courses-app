import { AuthorsAction, AuthorsActionTypes, AuthorsType } from "./types.ts";

export const authorsInitialState: AuthorsType[] = [];

export function authorsReducer(
  state = authorsInitialState,
  action: AuthorsAction
) {
  switch (action.type) {
    case AuthorsActionTypes.SAVE_AUTHORS:
      return action.payload;
    case AuthorsActionTypes.ADD_AUTHOR:
      return [...state, action.payload];
    case AuthorsActionTypes.DELETE_AUTHOR:
      return state.filter((author) => author.id !== action.payload);
    default:
      return state;
  }
}
