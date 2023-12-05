import { AppThunk } from "../index.ts";
import { AuthorsActionTypes, AuthorsType } from "./types.ts";
import { authorsAPI } from "../services.ts";

export const getAuthors = (): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await authorsAPI.fetchAllAuthors();

      dispatch({
        type: AuthorsActionTypes.SAVE_AUTHORS,
        payload: response,
      });
    } catch (error) {
      console.error("Error fetching authors:", error.message);
    }
  };
};

export const addAuthor = (token: string, authorData: AuthorsType): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      await authorsAPI.addAuthorToServer(token, authorData);

      dispatch({
        type: AuthorsActionTypes.ADD_AUTHOR,
        payload: authorData,
      });
    } catch (error) {
      console.error("Error adding author:", error.message);
    }
  };
};
