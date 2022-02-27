import {Fragment, useEffect} from "react";
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
//api
import setAuthToken from "../utils/setAuthToken";
// auth
import {useSession, signIn, signOut, getCsrfToken} from "next-auth/react"
import Dashboard from "./dashboard";
//redux
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../actions/auth";
import {LOGOUT} from "../actions/types";



// HOME PAGE
// route = '/'

export default function Home() {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
         <Dashboard/>
        )
    }

    console.log(session)

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




