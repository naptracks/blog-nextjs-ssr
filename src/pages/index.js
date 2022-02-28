import {Fragment, useEffect} from "react";
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";

// auth
import {useSession, signIn, signOut} from "next-auth/react"
import Dashboard from "./dashboard";
import {useDispatch} from "react-redux";
import {USER_LOADED, LOGOUT} from "../actions/types";


// HOME PAGE
// route = '/'

export default function Home() {


    const { data: session } = useSession()
    const dispatch = useDispatch()

    useEffect(() => {

        if (session) {
            const token = session.accessToken
            localStorage.setItem('token', token)
            dispatch({type: USER_LOADED, payload: {token, user: session.user}})
        } else {
                localStorage.removeItem('token')
                dispatch({type: LOGOUT})
        }

        // log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
            if (!localStorage.token) dispatch({type: LOGOUT});
        })
    },[session])


    if (session) {
        return (
         <Dashboard/>
        )
    }
    return (
        <>
            <Fragment>
                <Layout center>
                    <Login signIn={signIn} signOut={signOut}/>
                </Layout>
            </Fragment>
        </>
    )
}




