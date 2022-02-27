import React from "react";
import cn from 'classnames'



const Container = (props) => {
    const {
        center,
        col,
        layout,
        content,
        className,
        spaceBetween,
        flexStart,
        justifyCenter,
        alignCenter,
    } = props

    const styles = cn(className,{
        'content': content,
        'center': center,
        'justify-center': justifyCenter,
        'align-center': alignCenter,
        'layout': layout,
        'col': col,
        'space-between': spaceBetween,
        'flex-start': flexStart
    })

    return (
        <div className={'container'}>
            <div className={styles}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;