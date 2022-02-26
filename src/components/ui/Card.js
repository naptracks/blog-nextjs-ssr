import {Fragment} from "react";


const Card = () => {
    return (
        <Fragment>
            <div className={'card-container'}>
                <img src={'https://via.placeholder.com/350/400/f66b97'} alt={'card image'}/>
                <h3>Title</h3>
                <p>Description</p>
                <div className={'read-more-container'}>
                    <p className={'read-more'}>Read More</p>
                    <img src={'arrow.png'} alt={'read more'}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;