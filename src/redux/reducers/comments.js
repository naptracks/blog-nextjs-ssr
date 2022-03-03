import {
    ADD_COMMENT, FETCH_COMMENTS,
    REMOVE_COMMENT
} from '../actions/types';

const initialState = {
    comments: [],
    comment: null,
    loading: true,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case ADD_COMMENT:
            return {
                ...state,
                comments: [payload , ...state.comments],
                loading: false
            };
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: payload,
                loading: false
            };
        default:
            return state;
    }
}
