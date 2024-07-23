/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fillSpaces = (arrLine, freeLineSpace) => {
    let line = arrLine[0]
    const n = arrLine.length - 1
    if (n == 0) return line
    const spacePerWord = Math.floor(freeLineSpace / n)
    const mod = freeLineSpace % n
    let space = new Array(spacePerWord).fill(' ').join('')
    for (let i = 0; i < n; i++) {
        line += space + (i < mod ? ' ' : '') + arrLine[1+i]
    }
    return line
}
const fillLeftSpaces = (arrLine, maxWidth) => {
    let line = arrLine[0]
    const n = arrLine.length
    for (let i = 1; i < n; i++) {
        line += ' ' + arrLine[i]
    }
    while (line.length < maxWidth) line += ' '
    return line
}
var fullJustify = function (words, maxWidth) {
    let justified = [], freeLineSpace = maxWidth, line = []
    const nWords = words.length
    for (let i = 0; i < nWords; i++) {
        const word = words[i]
        const n = word.length
        if (n > freeLineSpace - line.length) {
            const lineString = line.length==1? fillLeftSpaces(line, maxWidth) : fillSpaces(line, freeLineSpace)
            justified.push(lineString)
            line = []
            freeLineSpace = maxWidth
        }
        line.push(word)
        freeLineSpace -= n
        if (i == nWords - 1) justified.push(fillLeftSpaces(line, maxWidth))
    }
    for (let j of justified) console.log(j.length)
    return justified
};
