import React from 'react';
import {capitalizeAllFirstLetters, punctuation} from "../../utils/stringTools";

const CommentItem = (props) => {

    const {
        postId,
        id,
        text,
        name,
        email,
        deleteComment
    } = props



    return <div className='post bg-white p-1 my-1'>
        <div>
            <img className='round-img' src={'profile.png'} alt=''/>
            <h4>{email}</h4>
        </div>
        <div>
            <h4>{capitalizeAllFirstLetters(name)}</h4>
            <p className='my-1'>{punctuation(text)}</p>

        </div>
    </div>
};

export default CommentItem;