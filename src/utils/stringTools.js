export const chunkWords = (string, n) => {
    const words = string.split(' ')
    if(words.length > n) {
        return words
            .slice(0, n)
            .join(' ')
    }
    return string
}

export const capitalizeAllFirstLetters = (input, n) => {
    const strings = chunkWords(input, n).split(' ')
    return strings
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')
}

export const punctuation = (input, n) => {
    const firstWord = input.split(' ')[0]
    const firstWordUppercase = capitalizeAllFirstLetters(firstWord)
    const rest = chunkWords(input, n)
        .split(' ')
        .slice(1)
        .join(' ')
    return `${firstWordUppercase} ${rest}.`
}

export const bigLetter = (input) => {
    const firstLetter = capitalizeAllFirstLetters(input[0])
    const rest = input.slice(1)
    return {firstLetter,  rest}
}
