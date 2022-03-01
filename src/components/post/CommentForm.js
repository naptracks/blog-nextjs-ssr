import { useState } from 'react';
import { addComment } from '../../actions/comment';

const CommentForm = ({postId}) => {
    const [text, setText] = useState('');



    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Laisse un commentaire ;)</h3>
            </div>
            <form
                className='form my-1'
                onSubmit={e => {
                    e.preventDefault();
                    addComment(postId, { text });
                    setText('');
                }}
            >
        <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='Commente le post'
            value={text}
            onChange={e => setText(e.target.value)}
            required
        />
                <input type='submit' className='btn btn-dark my-1' value='Confirmer' />
            </form>
        </div>
    );
};

export default CommentForm;
