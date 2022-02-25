import axios from 'axios';
import {LOGOUT} from "../actions/types";

// create axios model
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 **/

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);


export default api;
