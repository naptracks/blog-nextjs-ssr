import {Fragment, useEffect} from "react";
import Head from 'next/head'
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
import setAuthToken from "../utils/setAuthToken";
// auth
import {useSession, signIn, signOut} from "next-auth/react"
import Dashboard from "./dashboard";
import {useDispatch, useSelector} from "react-redux";


// HOME PAGE
// route = '/'

export default function Home() {


    const { data: session } = useSession()
    const auth = useSelector(s => s.auth )
    const dispatch = useDispatch()

    useEffect(() => {
        setAuthToken(session,  dispatch)
    },[session])


    if (auth.isAuthenticated) {
        return (
         <Dashboard/>
        )
    }

    return (
            <Fragment>
                <Head>
                    <title>Dehef Blog </title>
                </Head>
                <Layout center>
                    <Login signIn={signIn} signOut={signOut}/>
                </Layout>
            </Fragment>
    )
}




