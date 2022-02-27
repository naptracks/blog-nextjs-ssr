// Dashboard page - route = '/dashboard
// access with auth

import {Fragment, useEffect, useState} from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Separator from "../components/layout/Separator";
import Card from "../components/ui/Card";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/post";
// next-auth
import {useSession, signOut} from "next-auth/react";


const Dashboard = () => {

    const { data: session } = useSession()

    const [n, setN] = useState(12)
    const dispatch = useDispatch()
    const posts = useSelector(s => s.post.posts)

    console.log(session)

    useEffect(() => {
        dispatch(getPosts())
    }, [getPosts])



    return (
        <Fragment>
                <Layout session={session} singOut={() => signOut()}>
                    <Container content col>
                        <div className={'header-dashboard-container'}>
                            <Separator short/>
                            <h2>Find The Best Articles</h2>
                        </div>
                        <div className={'articles-dashboard-container'}>
                            {posts.slice(0, n).map((p, key) => <Card key={key} title={p.title} body={p.body}/>)}
                        </div>
                        <div className={'header-dashboard-container'}>
                            <button onClick={() => setN(state => state + 12) }>Load More Articles</button>
                        </div>
                    </Container>
                </Layout>
        </Fragment>
    )
}


Dashboard.auth = true;

export default Dashboard;

