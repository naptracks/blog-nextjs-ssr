import { combineReducers} from "redux";
import post from "./post";
import comments from "./comments";
import auth from "./auth";
import user from './user'

export default combineReducers({
    post,
    comments,
    auth,
    user
})