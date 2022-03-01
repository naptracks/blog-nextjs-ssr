import React from 'react';
import {capitalizeAllFirstLetters, punctuation} from "../../utils/stringTools";
import {Avatar} from "@mui/material";
import Separator from "../layout/Separator";

const CommentItem = (props) => {

    const {
        text,
        name,
        email,
    } = props



    return <div>
        <Separator wide/>
        <div className={'profile-comments-item'}>
            <Avatar>{email.slice(0,1)}</Avatar>
            <h4>{email}</h4>
        </div>
            <h4>{capitalizeAllFirstLetters(name)}</h4>
            <p>{punctuation(text)}</p>
    </div>
};

export default CommentItem;