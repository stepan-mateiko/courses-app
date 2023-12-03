import { AppThunk } from "../index.ts";
import { CoursesActionTypes } from "./types.ts";
import { coursesAPI } from "../services.ts";

export const getCourses = (): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await coursesAPI.fetchAllCourses();

      dispatch({
        type: CoursesActionTypes.SAVE_COURSES,
        payload: response,
      });
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  };
};

export const deleteCourse = (token: string, id: string): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      await coursesAPI.deleteCourseFromServer(token, id);
      console.log("success");
      dispatch({
        type: CoursesActionTypes.DELETE_COURSE,
        payload: id,
      });
    } catch (error) {
      console.error("Error deleting course:", error.message);
    }
  };
};
