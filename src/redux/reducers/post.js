import {
    GET_POSTS,
    POST_ERROR,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../actions/types';

const initialState = {
    posts: [],
    post: {
        body: ' ',
        id: 1,
        title: ' ',
        userId: ' ',
    },
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== payload),
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
}
