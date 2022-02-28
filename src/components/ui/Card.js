import {capitalizeAllFirstLetters, punctuation} from "../../utils/stringTools";


const Card = ({id, title, body, router}) => {


    return (
        <div key={id} className={'card-container'}>
            <img onClick={() => router.push(`${id}`)} src={'main-image.png'} alt={'card image'}/>
            <h3>{capitalizeAllFirstLetters(title, 3)}</h3>
            <p>{punctuation(body, 10)}</p>
            <div className={'read-more-container'}>
                <p onClick={() => router.push(`${id}`)} className={'read-more'}>Read More</p>
                <img src={'arrow.png'} alt={'read more'}/>
            </div>
        </div>
    )
}

export default Card;