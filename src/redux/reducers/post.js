import {
    GET_POSTS,
    GET_POST,
} from '../actions/types';

const initialState = {
    posts: [],
    post: {
        body: ' ',
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

        default:
            return state;
    }
}
