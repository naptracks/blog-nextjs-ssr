import {Fragment, useEffect} from "react";
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
import setAuthToken from "../utils/setAuthToken";
// auth
import {useSession, signIn, signOut} from "next-auth/react"
import Posts from "./posts";
import {useDispatch, useSelector} from "react-redux";

// HOME PAGE
// route = '/'

export default function Home() {
    const { data: session} = useSession()
    const dispatch = useDispatch()

    useEffect(() => {
        setAuthToken(session,  dispatch)
    },[session, dispatch])


        if (!session || !localStorage.token) {
            return (
                <Fragment>
                    <Layout center>
                        <Login signIn={signIn} signOut={signOut}/>
                    </Layout>
                </Fragment>
            )
        }
        return <Posts/>


}




