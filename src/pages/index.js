import {Fragment, useEffect} from "react";
import {useRouter} from "next/router";
//components
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
import setAuthToken from "../utils/setAuthToken";
// auth
import {useSession, signIn, signOut} from "next-auth/react"
import {useDispatch} from "react-redux";
import {useData, useLangUpdate} from "../context/LangContext";
// HOME PAGE
// route = '/'

export default function Home() {
    const { data: session} = useSession()
    const dispatch = useDispatch()
    const router = useRouter();
    const data = useData()
    const locale = useLangUpdate()

    useEffect(() => {
        locale(router.locale)
        setAuthToken(session,  dispatch)
    },[router.locale,  session, dispatch])



            if (session) {
                router.push('/posts', '/posts', { locale: router.locale })
            }
            return (
                <Fragment>
                    <Layout data={data.common} center>
                        <Login data={data.home} signIn={signIn} signOut={signOut}/>
                    </Layout>
                </Fragment>
            )
}




