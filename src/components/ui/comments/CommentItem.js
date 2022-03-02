import React, {Fragment} from 'react';
import {capitalizeAllFirstLetters, punctuation} from "../../../utils/stringTools";
import {Avatar} from "@mui/material";
import Separator from "../../layout/Separator";

const CommentItem = (props) => {

    const {
        text,
        name,
        email,
    } = props



    return <Fragment>
        <Separator wide/>
        <div className={'profile-comments-item'}>
            <Avatar>{email.slice(0,1)}</Avatar>
            <h4>{email}</h4>
        </div>
            <h4>{capitalizeAllFirstLetters(name)}</h4>
            <p>{punctuation(text)}</p>
    </Fragment>
};

export default CommentItem;