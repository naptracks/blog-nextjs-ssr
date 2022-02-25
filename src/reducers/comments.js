import {
    ADD_COMMENT,
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
                post: { ...state, comments: payload },
                loading: false
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                post: {
                    ...state,
                    comments: state.comments.filter(
                        comment => comment.id !== payload
                    )
                },
                loading: false
            };
        default:
            return state;
    }
}
