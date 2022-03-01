import React from 'react';


const CommentItem = (props) => {

    const {
        postId,
        id,
        text,
        name,
        email,
        deleteComment
    } = props

    console.log(name)

    return <div className='post bg-white p-1 my-1'>
        <div>
            <img className='round-img' src={'profile.png'} alt=''/>
            <h4>{email}</h4>
        </div>
        <div>
            <h4>{name}</h4>
            <p className='my-1'>{text}</p>

            <button
                onClick={() => deleteComment(postId, id)}
                type='button'
                className='btn btn-danger'
            >
                <i className='fas fa-times'/>
            </button>
        </div>
    </div>
};

export default CommentItem;