import { AppThunk } from "../index.ts";
import { AuthorsActionTypes } from "./types.ts";
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
