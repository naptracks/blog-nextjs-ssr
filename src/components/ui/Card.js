import {Fragment} from "react";
import {chunkWords} from "../../utils/chunkWords";


const Card = ({key, title, body}) => {
    return (
        <Fragment>
            <div key={key} className={'card-container'}>
                <img src={'https://via.placeholder.com/350/400/f66b97'} alt={'card image'}/>
                <h3>{chunkWords(title, 3)}</h3>
                <p>{chunkWords(body, 10)}</p>
                <div className={'read-more-container'}>
                    <p className={'read-more'}>Read More</p>
                    <img src={'arrow.png'} alt={'read more'}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;