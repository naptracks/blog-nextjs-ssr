import {
    USER_LOADED,
    LOGOUT,
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                isAuthenticated: true,
                user: payload.user
            };
        case LOGOUT:
            return {
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}
