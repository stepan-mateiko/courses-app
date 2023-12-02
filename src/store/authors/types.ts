// authors/types.ts

export type AuthorsType = {
  name: string;
  id: string;
};

export const enum AuthorsActionTypes {
  SAVE_AUTHORS = "SAVE_AUTHORS",
  ADD_AUTHOR = "ADD_AUTHOR",
  DELETE_AUTHOR = "DELETE_AUTHOR",
}
// Add action types for saving, updating, and deleting authors as needed

export interface SaveAuthors {
  type: AuthorsActionTypes.SAVE_AUTHORS;
  payload: AuthorsType[];
}

export interface AddAuthor {
  type: AuthorsActionTypes.ADD_AUTHOR;
  payload: AuthorsType;
}

export interface DeleteAuthor {
  type: AuthorsActionTypes.DELETE_AUTHOR;
  payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthor | DeleteAuthor;
