// courses/reducer.ts

import { CoursesActionTypes, CourseType, CoursesAction } from "./types.ts";
import { coursesAPI } from "../services.ts";

const initCoursesState: CourseType[] = await coursesAPI.getAllCourses();

export function coursesReducer(
  state = initCoursesState,
  action: CoursesAction
) {
  switch (action.type) {
    case CoursesActionTypes.SAVE_COURSES:
      return action.payload;
    case CoursesActionTypes.ADD_COURSE:
      return [...state, action.payload];
    case CoursesActionTypes.DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    default:
      return state;
  }
}
