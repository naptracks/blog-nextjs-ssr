import { combineReducers} from "redux";
import post from "./post";
import comments from "./comments";
import auth from "./auth";
import hydrate from "./hydrate";

export default combineReducers({
    post,
    comments,
    auth,
    hydrate
})