import { combineReducers } from "redux";
import CourseReducer from "./CourseReduser";

const rootReduser = combineReducers({
  Course: CourseReducer,
});
export default rootReduser;
