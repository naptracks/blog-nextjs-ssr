// Dashboard page - route = '/dashboard
// access with auth

import {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Separator from "../components/layout/Separator";
import Card from "../components/ui/Card";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/post";
// next-auth
import {signOut, useSession} from "next-auth/react";

import Home from "./index";
import {LOGOUT} from "../actions/types";
import Button from "@mui/material/Button";


const Posts = () => {

    const [n, setN] = useState(12)
    const dispatch = useDispatch()
    const posts = useSelector(s => s.post.posts)
    const {data: session} = useSession()
    const router = useRouter()

    useEffect(() => {

        dispatch(getPosts())
    }, [session])


    if (!session) {
        dispatch({type: LOGOUT})
        if (localStorage.token) {
            localStorage.removeItem('token')
        }

        return <Home/>
    }

    return (
        <Fragment>
            <Layout user={session.user} singOut={() => signOut()}>
                <Container content col>
                    <div className={'header-dashboard-container'}>
                        <Separator short/>
                        <h2>Find The Best Articles</h2>
                    </div>
                    <div className={'articles-dashboard-container'}>
                        {posts.slice(0, n).map((p, key) => <Card router={router} id={p.id} title={p.title} body={p.body}/>)}
                    </div>
                    <div className={'header-dashboard-container'}>
                        <Button onClick={() => setN(state => state + 12)}>Load More Articles</Button>
                    </div>
                </Container>
            </Layout>
        </Fragment>
    )
}

Posts.auth = true;

export default Posts;
