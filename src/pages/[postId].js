import {useRouter} from 'next/router'
import React, {Fragment, useEffect, useLayoutEffect} from "react";
//redux
import {useDispatch, useSelector} from "react-redux";
import {getPost, getPosts} from "../actions/post";
import {fetchUsers} from "../actions/users";
//components
import Home from "./index";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
//auth
import {signOut, useSession} from "next-auth/react";
//tools
import {capitalizeAllFirstLetters, punctuation, bigLetter, makeBodyLarger, chunkWords} from "../utils/stringTools";
import Separator from "../components/layout/Separator";
import {Avatar} from "@mui/material";
import Card from "../components/ui/Card";
import {LOGOUT} from "../actions/types";
import CommentForm from "../components/post/CommentForm";
import {deleteComment, fetchComments} from "../actions/comment";
import comments from "../reducers/comments";
import CommentItem from "../components/post/CommentItem";


// PAGE Article [postId].js
const Post = () => {

    // settings
    const router = useRouter()
    const {postId} = router.query
    const {data: session} = useSession()
    const dispatch = useDispatch();

    // from store
    const post = useSelector(s => s.post)
    const {
        body,
        title,
        userId
    } = post.post
    const user = useSelector(s => s.user)
    const author = user.users.find(u => u.id === userId) || 'loading...'
    const comments = useSelector(s => s.comments.comments)


    console.log(comments)

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(getPost(postId))
        dispatch(getPosts())
        dispatch(fetchComments(postId))
    }, [postId, getPost, getPosts, fetchUsers, fetchComments, session])


    // if session is down
    if (!session) {
        dispatch({type: LOGOUT})
        if (localStorage.token) {
            localStorage.removeItem('token')
        }
        return <Home/>
    }

    const boldParagraph = (
        <div className={'bold-paragraph-article'}>
            <h5>{punctuation(body, 5)}</h5>
        </div>
    )

    const infoAuthor = (
        <div className={'info-author-article-container center col'}>
            <Avatar alt="alt" src={session.user.image} sx={{width: 90, height: 90}}/>
            <Separator wide margin/>

            <div className={'center col'}>
                <p>Written by</p>
                <h4>{author.name}</h4>
            </div>

        </div>
    )

    return (

        <Fragment>
            <Layout user={session.user} singOut={() => signOut()}>
                <Container content center col className={'article-container relative'}>


                    <div className={'title-article-container center col'}>
                        <Separator short/>
                        <h1>{capitalizeAllFirstLetters(title, 3)}</h1>
                        <p>{punctuation(body, 10)}</p>
                    </div>
                    <img className={'big-image'} src={'main-image.png'} alt={'blog-image'}/>


                    <div className={'text-article-container col'}>
                        {infoAuthor}
                        <div className={'first-paragraph row'}>
                            <div className={'big-letter-article'}>
                                {bigLetter(body).firstLetter}
                            </div>
                            <div className={'rest-text-article'}>
                                <p>{chunkWords(bigLetter(body).rest, 18)}.</p>
                            </div>
                        </div>
                        <p className={'text'}>{punctuation(body)} {punctuation(body, 8)} </p>
                        <p></p>
                        <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body)}</p>
                    </div>
                    <img className={'medium-image'} src={'article-image.png'} alt={'blog-img'}/>

                    <div className={'text-article-container col'}>
                        {boldParagraph}
                        <div className={'second-paragraph row'}>
                            <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body, 6)}</p>
                        </div>

                        <div className={'rest-text-article'}>
                        </div>
                        <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body)} {punctuation(body)}</p>
                        <p></p>
                        <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body)} {punctuation(body)}</p>
                    </div>
                    <img src={'socials-counter.png'} alt={'socials counter'}/>
                    <Separator wide/>

                    {
                        comments.map(c => <CommentItem id={c.id} name={c.name} email={c.email} text={c.body} postId={postId} deleteComment={deleteComment}/>)
                    }
                    <CommentForm postId={postId}/>

                    <Separator wide/>
                    <div className={'header-dashboard-container'}>
                        <Separator short/>
                        <h2>Related Articles</h2>
                    </div>
                    <div className={'articles-dashboard-container'}>
                        {post.posts.slice(0, 3).map((p, key) => <Card router={router} id={p.id} title={p.title}
                                                                      body={p.body}/>)}
                    </div>
                </Container>
            </Layout>
            }
        </Fragment>
    )
}

Post.auth = true


export default Post



