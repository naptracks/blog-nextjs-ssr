import {useRouter} from 'next/router'
import React, {Fragment, useEffect, useLayoutEffect} from "react";
//redux
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../actions/post";
//components
import Home from "./index";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
//auth
import {signOut, useSession} from "next-auth/react";
//tools
import {capitalizeAllFirstLetters, punctuation, bigLetter, makeBodyLarger, chunkWords} from "../utils/stringTools";
import Separator from "../components/layout/Separator";
import {api} from "../utils/api";
import {Avatar} from "@mui/material";
import Card from "../components/ui/Card";

// PAGE Article [postId].js


const Post = () => {
    const router = useRouter()
    const {postId} = router.query

    const dispatch = useDispatch();
    const post = useSelector(s => s.post)
    const {data: session} = useSession()

    useLayoutEffect(() => {
        dispatch(getPost(postId))
    }, [getPost])


    const infoAuthor = (
        <div className={'info-author-article-container center col'}>
            <Avatar alt="alt" src={session.user.image} sx={{width: 90, height: 90}}/>
            <Separator wide margin/>
            <div className={'center col'}>
                <p>Written by</p>
                <h4>{session.user.name}</h4>
            </div>
        </div>
    )


    const {
        body,
        id,
        title,
        userId
    } = post.post

    // const body = 'body'
    // const title = 'title'


    const boldParagraph = (
        <div className={'bold-paragraph-article'}>
            <h5>{punctuation(body, 5)}</h5>
        </div>
    )

    console.log(post)

    if (!session) {
        return <Home/>
    }

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
                    <Separator wide />
                    <Separator wide />
                        <div className={'header-dashboard-container'}>
                            <Separator short/>
                            <h2>Related Articles</h2>
                        </div>
                        <div className={'articles-dashboard-container'}>
                            {post.posts.slice(0, 3).map((p, key) => <Card router={router} id={p.id} title={p.title} body={p.body}/>)}
                        </div>
                </Container>
            </Layout>
        </Fragment>
    )
}

export default Post


