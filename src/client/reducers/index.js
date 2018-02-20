import { combineReducers } from "redux";
import usersReducers from "./users_reducers";
import authReducers from "./auth_reducers";
import adminsReducers from "./admins_reducers";

export default combineReducers({
    users: usersReducers,
    auth: authReducers,
    admins: adminsReducers
});
