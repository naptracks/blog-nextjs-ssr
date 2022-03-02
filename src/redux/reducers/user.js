import {
    FETCH_USERS,
} from '../actions/types';

const initialState = {
    users: [],
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_USERS:
            return {
                users: payload,
                loading: false
            };
        default:
            return state;
    }
}

