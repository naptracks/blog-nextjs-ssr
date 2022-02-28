import {LOGOUT, USER_LOADED} from "../actions/types";


const setAuthToken = (session, dispatch) => {
    if (session) {
        const token = session.accessToken
        localStorage.setItem('token', token)
        dispatch({type: USER_LOADED, payload: {user: session.user}})
    } else {
        localStorage.removeItem('token')
        dispatch({type: LOGOUT})
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
        if (!localStorage.token) dispatch({type: LOGOUT});
    })
}

export default setAuthToken;