import { combineReducers } from "redux";
import usersReducers from "./users_reducers";

export default combineReducers({
    users: usersReducers
});
