/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // const codeToChar = code => String.fromCharCode(code)
    // const withMap = () => {
    // let dict = new Map()
    // const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const lower = "abcdefghijklmnopqrstuvwxyz"
    // for (let i = 0; i < 26; ++i) {
    //     dict.set(upper.charAt(i), lower.charAt(i));
    // }
    // let newStr = []
    // for (let c of s) {
    //     if (dict.has(c)) newStr.push(dict.get(c))
    //     else newStr.push(c)
    // }
    // return newStr.join('')
    // }
    // const onlyLetters = () => {
    const diff = 32
    let newStr = []
    const convert = (c) => String.fromCharCode(c.charCodeAt(0) + diff)
    for (let c of s) {
        if ('A' <= c && c <= 'Z') {
            newStr.push(convert(c))
        } else {
            newStr.push(c)
        }
    }
    return newStr.join('')
    // }
    // return withMap()
};
