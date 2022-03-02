import {useRouter} from 'next/router'
import {Fragment, useEffect} from "react";
//redux
import {useDispatch, useSelector} from "react-redux";
import {getPost, getPosts} from "../../redux/actions/post";
import {fetchUsers} from "../../redux/actions/users";
import {addComment, fetchComments} from "../../redux/actions/comment";
//components
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import Container from "../../components/layout/Container";
import {Avatar} from "@mui/material";
import Separator from "../../components/layout/Separator";
import Card from "../../components/ui/Card";
import CommentForm from "../../components/ui/comments/CommentForm";
import CommentItem from "../../components/ui/comments/CommentItem";
//auth
import {signOut, useSession} from "next-auth/react";
//tools
import {capitalizeAllFirstLetters, punctuation, bigLetter, chunkWords} from "../../utils/stringTools";
import setAuthToken from "../../utils/setAuthToken";
//context
import {useData, useLangUpdate} from "../../context/LangContext";


// PAGE Article [postId].js
const Post = () => {

    // settings
    const router = useRouter()
    const {postId} = router.query
    const {data: session} = useSession()
    const dispatch = useDispatch();
    const data = useData();
    const locale = useLangUpdate()


    // async: check token & locale
    useEffect(() => {
        locale(router.locale)
        setAuthToken(session,  dispatch)
        dispatch(fetchUsers())
        dispatch(getPost(postId))
        dispatch(getPosts())
        dispatch(fetchComments(postId))
    }, [router.locale, postId, getPost, getPosts, fetchUsers, fetchComments, session])


    // from store
    const post = useSelector(s => s.post)
    const {
        body,
        title,
        userId
    } = post.post
    const user = useSelector(s => s.user)
    const author = user.users.find(u => u.id === userId) || {name: 'loading...'}
    const comments = useSelector(s => s.comments.comments)


    // components
    const boldParagraph = (
        <div className={'bold-paragraph-article'}>
            <h5>{punctuation(body, 5)}</h5>
        </div>
    )

    const infoAuthor = (
        <div className={'info-author-article-container center col'}>
            <Avatar alt="alt" sx={{width: 90, height: 90}}>{author.name.slice(0,1)}</Avatar>
            <Separator wide margin/>
            <div className={'center col'}>
                <p>{data.post.author}</p>
                <h4>{author.name}</h4>
            </div>

        </div>
    )

    //RENDER
    return <Fragment>
            <Layout data={data.common} user={session.user} singOut={() => signOut()}>
                <Container content center col className={'article-container relative'}>

                    {/* Title + Image */}
                    <div className={'title-article-container center col'}>
                        <Separator short/>
                        <h1>{capitalizeAllFirstLetters(title, 3)}</h1>
                        <p>{punctuation(body, 10)}</p>
                    </div>
                    <img className={'big-image'} src={'/main-image.png'} alt={'blog-image'}/>

                    {/*First Paragraph */}
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
                    <img className={'medium-image'} src={'/article-image.png'} alt={'blog-img'}/>

                    {/*Second Paragraph*/}
                    <div className={'text-article-container col'}>
                        {boldParagraph}
                        <div className={'second-paragraph row'}>
                            <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body, 8)}</p>
                        </div>
                        <div className={'rest-text-article'}>
                        </div>
                        <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body)} {punctuation(body)}</p>
                        <p></p>
                        <p className={'text'}>{punctuation(body)} {punctuation(body)} {punctuation(body)} {punctuation(body)}</p>
                    </div>

                    <img  src={'/socials-counter.png'} alt={'socials counter'}/>

                    {/*Comments*/}
                    <Separator wide/>
                    <Container content className={'text-article-container'} col>

                        <CommentForm data={data.post.comment} postId={postId}
                                     addComment={addComment}
                                     dispatch={dispatch}/>
                        {
                            comments
                                .reverse()
                                .map(c => <Fragment key={c.id}><CommentItem id={c.id} name={c.name} email={c.email} text={c.body} postId={postId}/></Fragment>)
                        }

                    </Container>
                    <Separator wide/>

                    {/*Related Articles*/}
                    <div className={'header-dashboard-container'}>
                        <Separator short/>
                        <h2>{data.post.related}</h2>
                    </div>
                    <div className={'articles-dashboard-container'}>
                        {post.posts
                            .filter(p => p.userId === author.id)
                            .slice(0, 3)
                            .map((p, key) =>
                            <Fragment key={key}><Card data={data.card} router={router} id={p.id} title={p.title} body={p.body}/></Fragment>)
                        }
                    </div>
                </Container>
            </Layout>
            }
        </Fragment>

}

Post.auth = true


export default Post



