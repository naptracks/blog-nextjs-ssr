import { combineReducers} from "redux";
import post from "./post";
import comments from "./comments";

export default combineReducers({
    post,
    comments

})