import {capitalizeAllFirstLetters, punctuation} from "../../utils/stringTools";
import Link from 'next/link'
import {Fragment} from "react";


const Card = ({id, title, body, router, data}) => {

    return (
        <Fragment>
            <div className={'card-container'}>
                <Link href={`/posts/${id}`}>
                    <a> <img src={'/main-image.png'} alt={'card image'}/> </a>
                </Link>
                <h3>{capitalizeAllFirstLetters(title, 3)}</h3>
                <p>{punctuation(body, 10)}</p>
                <div className={'read-more-container'}>
                    <p onClick={() => router.push(`/posts/${id}`, `/posts/${id}`, {locale: 'fr'})}
                       className={'read-more'}>{data.readMore}</p>
                    <img src={'/arrow.png'} alt={'read more'}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;