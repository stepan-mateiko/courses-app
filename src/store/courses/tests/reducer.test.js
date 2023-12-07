import { coursesReducer } from "../reducer.ts";
import { CoursesActionTypes } from "../types.ts";

const mockedInitialState = [];

describe("courses reducer", () => {
  test("should return initial state", () => {
    expect(coursesReducer(undefined, {})).toEqual(mockedInitialState);
  });

  test("should handle GET_ALL_COURSES_SUCCESS", () => {
    const action = {
      type: CoursesActionTypes.SAVE_COURSES,
      payload: mockedInitialState,
    };
    expect(coursesReducer({}, action)).toEqual(mockedInitialState);
  });
});
