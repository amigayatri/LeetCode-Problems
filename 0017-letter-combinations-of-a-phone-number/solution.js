/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const n = digits.length
    if (n == 0) return []
    let res = []
    const keypad = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ]
    const decode = (i, currAnswer) => {
        if (i === n) {
            res.push(currAnswer)
            return
        }
        const options = keypad[digits[i] - '2']
        for (let option of options) {
            decode(i+1, currAnswer+option)
        }
    }
    decode(0, '')
    return res
};
