import { combineReducers} from "redux";
import post from "./post";
import comments from "./comments";
import auth from "./auth";

export default combineReducers({
    post,
    comments,
    auth,
})