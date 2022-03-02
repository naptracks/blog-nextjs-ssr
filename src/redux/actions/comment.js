import {api} from '../../utils/api';
import {
    ADD_COMMENT,
    FETCH_COMMENTS
} from './types';


export const fetchComments = (postId) => async dispatch => {
    try {
        const res = await api.get(`/comments`)
        const comments = res.data.filter(data => data.postId == postId)
        dispatch({
            type: FETCH_COMMENTS,
            payload: comments
        })
    } catch (err) {
        console.log(err)
    }
}

// Add comment
export const addComment = (comment, dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: comment.name,
            body: comment.body,
            email: comment.email,
            postId: comment.postId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => dispatch({type: ADD_COMMENT, payload: data}));
};


