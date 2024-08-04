/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const n = s.length
    let validIdx = 0
    let str = Array(n).fill('')
    for (let i = 0; i < n; i++) {
        if (s[i] == '*') {
            validIdx--
        } else {
            str[validIdx++] = s[i]
        }
    }
    while (str.length > validIdx) str.pop()
    
    return str.join('')
};
