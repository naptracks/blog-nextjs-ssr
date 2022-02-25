import React from "react";
import cn from 'classnames'

const Container = (props) => {

    const {
        center
    } = props

    const styles = cn('content',{
        'center': center
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