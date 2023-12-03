import { CoursesActionTypes, CourseType, CoursesAction } from "./types.ts";

const initCoursesState: CourseType[] = [];

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
