/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCount = new Map()
    for (let letter of magazine) {
        if (!letterCount.has(letter)) letterCount.set(letter, 0)
        const count = letterCount.get(letter)
        letterCount.set(letter, count+1)
    }

    for (let letter of ransomNote) {
        if (!letterCount.has(letter)) return false
        const count = letterCount.get(letter)
        letterCount.set(letter, count-1)
        if (count-1 == 0) letterCount.delete(letter)
    }
    return true
};
