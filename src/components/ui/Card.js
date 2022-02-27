import {chunkWords} from "../../utils/chunkWords";


const Card = ({id, title, body}) => {

    const capitalizeAllFirstLetters = (input, n) => {
        const strings = chunkWords(input, n).split(' ')
        return strings
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' ')
    }

    const punctuation = (input, n) => {
        const firstWord = input.split(' ')[0]
        const firstWordUppercase = capitalizeAllFirstLetters(firstWord)
        const rest = chunkWords(input, n)
            .split(' ')
            .slice(1)
            .join(' ')
        return `${firstWordUppercase} ${rest}.`
    }

    return (
        <div key={title} className={'card-container'}>
            <img src={'https://via.placeholder.com/350/400/f66b97'} alt={'card image'}/>
            <h3>{capitalizeAllFirstLetters(title, 3)}</h3>
            <p>{punctuation(body, 10)}</p>
            <div className={'read-more-container'}>
                <p className={'read-more'}>Read More</p>
                <img src={'arrow.png'} alt={'read more'}/>
            </div>
        </div>
    )
}

export default Card;