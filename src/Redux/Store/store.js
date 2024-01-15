import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { CommentReducer } from "../Comment/Reducer";
import { PostReducer } from "../Post/Reducer";
import { UserReducer } from "../User/Reducer";
import { AuthReducer } from "../Auth/Reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  post: PostReducer,
  comment: CommentReducer,
});
console.log("Auth Reducer  ", AuthReducer);
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
