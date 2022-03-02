import {Fragment, useEffect} from "react";
import {useRouter} from "next/router";
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
import setAuthToken from "../utils/setAuthToken";
// auth
import {useSession, signIn, signOut} from "next-auth/react"
import {useDispatch} from "react-redux";

// HOME PAGE
// route = '/'

export default function Home() {
    const { data: session} = useSession()
    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(() => {
        setAuthToken(session,  dispatch)
        if (session) {
        }
    },[router,  session, dispatch])


            if (session) {
                router.push('/posts', '/posts', { locale: 'fr' })
            }
            return (
                <Fragment>
                    <Layout center>
                        <Login signIn={signIn} signOut={signOut}/>
                    </Layout>
                </Fragment>
            )

}




