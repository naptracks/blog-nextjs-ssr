// Dashboard page - route = '/dashboard
// access with auth

import {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
//components
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Separator from "../components/layout/Separator";
import Card from "../components/ui/Card";
//mui
import Button from "@mui/material/Button";
//redux
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/actions/post";
// auth
import {signOut, useSession} from "next-auth/react";
import setAuthToken from "../utils/setAuthToken";
import {useData, useLangUpdate} from "../context/LangContext";


// PAGE: Posts.js
// display all posts by slices of 12

const Posts = () => {

    // settings
    const [n, setN] = useState(12)
    const dispatch = useDispatch()
    const posts = useSelector(s => s.post.posts)
    const {data: session} = useSession()
    const router = useRouter()
    const data = useData()
    const locale = useLangUpdate()

    // async
    useEffect(() => {
        locale(router.locale)
        setAuthToken(session,  dispatch)
        dispatch(getPosts())
    }, [session, router.locale])


    return (
        <Fragment>
            <Layout data={data.common} user={session.user} singOut={() => signOut()}>
                <Container content col>
                    <div className={'header-dashboard-container'}>
                        <Separator short/>
                        <h2>{data.posts.title}</h2>
                    </div>

                    {/*All posts*/}
                    <div className={'articles-dashboard-container'}>
                        {posts
                            .slice(0, n)
                            .map((p, key) =>
                                <Fragment key={key}>
                                    <Card data={data.card} router={router} id={p.id} title={p.title} body={p.body}/>
                                </Fragment>
                            )
                        }
                    </div>
                    <div className={'header-dashboard-container'}>
                        <Button onClick={() => setN(state => state + 12)}>{data.posts.loadButton}</Button>
                    </div>
                </Container>
            </Layout>
        </Fragment>
    )
}

Posts.auth = true;

export default Posts;

