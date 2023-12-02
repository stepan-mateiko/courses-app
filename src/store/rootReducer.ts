// rootReducer.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "./courses/reducer.ts";
import { authorsReducer } from "./authors/reducer.ts";
import { userReducer } from "./user/reduser.ts";

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  user: userReducer,
});

export const store = configureStore({ reducer: rootReducer });
