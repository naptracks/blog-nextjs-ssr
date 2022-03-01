import {capitalizeAllFirstLetters, punctuation} from "../../utils/stringTools";
import Link from 'next/link'


const Card = ({id, title, body, router}) => {

    const handleClick = () => {

    }
    return (
        <div key={id} className={'card-container'}>
           <Link href={`/${id}`}>
             <a>  <img src={'main-image.png'} alt={'card image'}/> </a>
           </Link>
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