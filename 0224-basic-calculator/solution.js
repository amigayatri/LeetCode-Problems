/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const n = s.length
    let stack = []
    let operand = 0, res = 0
    let sign = 1
    const signMap = {'+': 1, '-': -1}
    const digits = new Set(Array(10).fill().map((_, i) => `${i}`))
    for (let i = 0; i < n; i++) {
        const c = s.charAt(i)
        if (digits.has(c)) {
            const d = c.charCodeAt(0) - '0'.charCodeAt(0)
            operand = operand*10+d
        } else if (c in signMap) {
            res += sign*operand
            sign = signMap[c]
            operand = 0
        } else if (c === '(') {
            stack.push(res)
            stack.push(sign)
            res = 0
            sign = signMap['+']
        } else if (c === ')') {
            res += sign*operand
            res *= stack.pop()
            res += stack.pop()
            operand = 0
        }
    }
    res += sign*operand
    return res
};
