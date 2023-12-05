import { AppThunk } from "../index.ts";
import { CourseType, CoursesActionTypes } from "./types.ts";
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
      dispatch({
        type: CoursesActionTypes.DELETE_COURSE,
        payload: id,
      });
    } catch (error) {
      console.error("Error deleting course:", error.message);
    }
  };
};

export const addCourse = (token: string, courseData: CourseType): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      await coursesAPI.addCourseToServer(token, courseData);

      dispatch({
        type: CoursesActionTypes.ADD_COURSE,
        payload: courseData,
      });
    } catch (error) {
      console.error("Error adding course:", error.message);
    }
  };
};

export const updateCourse = (
  token: string,
  id: string,
  courseData: CourseType
): AppThunk => {
  return async (dispatch): Promise<void> => {
    try {
      const response = await coursesAPI.updateCourseOnServer(
        token,
        id,
        courseData
      );
      console.log(response);
      dispatch({
        type: CoursesActionTypes.UPDATE_COURSE,
        payload: response,
      });
    } catch (error) {
      console.error("Error adding course:", error.message);
    }
  };
};
