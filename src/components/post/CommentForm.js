import {useState} from 'react';
import {ADD_COMMENT} from "../../actions/types";

const CommentForm = ({postId, addComment, dispatch}) => {
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
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Leave a Comment ;)</h3>
            </div>
            <form
                method={'post'}
                className='form my-1'
                onSubmit={e => onSubmit(e)}
            >
                <input name={'name'} placeholder={'name'} value={comment.name} onChange={e => onChange(e)}/>
                <input name={'email'} placeholder={'email'} value={comment.email} onChange={e => onChange(e)}/>
                <textarea
                    name='body'
                    cols='30'
                    rows='5'
                    placeholder='Commente le post'
                    value={comment.body}
                    onChange={e => onChange(e)}
                    required
                />
                <button type='submit' className='btn btn-dark my-1'>Commenter</button>
            </form>
        </div>
    );
};

export default CommentForm;


