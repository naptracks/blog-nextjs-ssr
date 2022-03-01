import {HYDRATE} from "next-redux-wrapper";

const hydrate = (state = {}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.server,
                },
            };
        case 'SERVER_ACTION':
            return {
                ...state,
                server: {
                    ...state.server,
                },
            };
        case 'CLIENT_ACTION':
            return {
                ...state,
                client: {
                    ...state.client,
                },
            };
        default:
            return state;
    }
};

export default hydrate;
