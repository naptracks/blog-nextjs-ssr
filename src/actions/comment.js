import api from '../utils/api';
import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    POST_ERROR
} from './types';

// Add comment
export const addComment = (postId, formData) => async dispatch => {
    try {
        const res = await api.post(`/comments/${postId}`, formData);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
    try {
        await api.delete(`/comments/${postId}/${commentId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        });

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
