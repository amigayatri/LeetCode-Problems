/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    const nKey = keyboard.length, aCode = 'a'.charCodeAt(0)
    const keyIndex = Array(keyboard.length)
    for (let i = 0; i < nKey; i++) {
        keyIndex[keyboard.charCodeAt(i)-aCode] = i
    }
    const nWord = word.length
    let totalTime = 0, pos = 0, newPos = 0
    for (let i = 0; i < nWord; i++) {
        newPos = keyIndex[word.charCodeAt(i)-aCode]
        totalTime += Math.abs(pos-newPos)
        pos = newPos
    }
    return totalTime
};
