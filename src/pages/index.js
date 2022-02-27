import {Fragment} from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";
//auth with next-auth
import { useSession, signIn, signOut } from "next-auth/react"
import Dashboard from "./dashboard";

// Home page
// route = '/'

export default function Home() {
    const { data: session } = useSession()

    if (session) {
        return (
            <Dashboard/>
        )
    }

    return (
        <>
            <Fragment>
                <Layout>
                    <Login/>
                </Layout>
            </Fragment>
        </>
    )
}


