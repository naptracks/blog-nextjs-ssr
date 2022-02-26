import {Fragment} from "react";

export const chunkWords = (sentence, n) => {
    const words = sentence.split(' ')
    if(words.length > n) {
        const chunk = words.slice(0, n)
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', margin: '0'}}>
                {
                    chunk.map(c => <Fragment key={c} style={{margin: '0'}}>{c} </Fragment>)
                }
            </div>

        )
    }
    return sentence
}

