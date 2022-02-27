export const chunkWords = (string, n) => {
    const words = string.split(' ')
    if(words.length > n) {
        return words.slice(0, n).join(' ')
    }
    return string
}

