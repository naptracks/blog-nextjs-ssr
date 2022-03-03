import {Fragment, useState} from 'react';
import {Button} from "@mui/material";
import Separator from "../../layout/Separator";

const CommentForm = (props) => {

    const {postId, addComment, dispatch, data} = props

    const initialState = {
        name: '',
        email: '',
        body: '',
        postId
    }

    const [comment, setComment] = useState(initialState);


    const onChange = e => {
        setComment({...comment, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        addComment(comment,  dispatch)
        setComment(initialState);
    }

    return (
        <Fragment>
            <div className={'col center p-t-4'}>
                <Separator short/>
                <h3>{data.title}</h3>

            </div>
            <form
                method={'post'}
                className='comment-form col'
                onSubmit={e => onSubmit(e)}
            >

                <input required name={'email'} placeholder={data.email} value={comment.email} onChange={e => onChange(e)}/>
                <input required  name={'name'} placeholder={data.name} value={comment.name} onChange={e => onChange(e)}/>
                <textarea
                    name='body'
                    rows='5'
                    placeholder={data.placeholder}
                    value={comment.body}
                    onChange={e => onChange(e)}
                    required
                />
                <Button type='submit' className='btn btn-dark my-1'>{data.button}</Button>
            </form>
        </Fragment>
    );
};

export default CommentForm;


