/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const n = s.length
    const number = (c) => {
        return c.charCodeAt(0) - '0'.charCodeAt(0)
    }
    const digits = new Set(Array(10).fill().map((_, i) => `${i}`))
    const first = new Set(['/', '*'])
    let op = '+'
    let currNum = 0, lastNum = 0, res = 0
    for (let i = 0; i < n; i++) {
        const c = s[i]
        if (digits.has(c)) currNum = currNum*10+number(c)
        if ((!digits.has(c) && c !== ' ') || i == n-1) {
            if (first.has(op)) {
                if (op == '*') lastNum *= currNum
                else lastNum = Math.trunc(lastNum/currNum)
            } else {
                res += lastNum
                lastNum = (op == '+') ? currNum : (currNum*-1)
            }
            op = c
            currNum = 0
        }
    }
    res += lastNum
    return res
};
