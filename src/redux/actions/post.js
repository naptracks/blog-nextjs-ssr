import {api} from '../../utils/api';
import {
    GET_POSTS,
    POST_ERROR,
    GET_POST,
} from './types';

// Get all posts
export const getPosts = () => async dispatch => {
    try {
        const res = await api.get('/posts');
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Get post by id
export const getPost = id => async dispatch => {
    try {
        const res = await api.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


