import {api} from "../../utils/api";
import {FETCH_USERS, POST_ERROR} from "./types";


// GET users
export const fetchUsers = () => async dispatch => {
    try {
        const res = await api.get('/users')
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

