/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const n = s.length
    let charCode = 0
    for (const c of s) {
        charCode ^= c.charCodeAt(0)
    }
    for (const c of t) {
        charCode ^= c.charCodeAt(0)
    }
    return String.fromCharCode(charCode)
};
