/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    const nW = words.length
    let maxN = nW
    for (let i in words) {
        const l = words[i].length
        if (l > maxN) return false
        let j = 0
        while(words[i] != undefined && words[j] != undefined && words[i].charAt(j) == words[j].charAt(i)) {
            j++
        }
        maxN = l
        if (j < maxN) return false
    }
    return true
};
