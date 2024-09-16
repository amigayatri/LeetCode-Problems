const getDigit = (char) => char.charCodeAt(0) - '0'.charCodeAt(0)
const calculate = function (s, i = 0) {
    const n = s.length
    let num = 0, result = 0, prev = 0, sign = '+'
    for (; i < n; i++) {
        const char = s[i]
        if (!isNaN(char)) {
            num = num*10 + getDigit(char)
        }
        if (isNaN(char) || i === n-1) {
            if (char === '(') {
                ({i, num} = calculate(s, i+1))
            }
            if (sign === '+') {
                result += prev
                prev = num
            } else if (sign === '-') {
                result += prev
                prev = -num
            } else if (sign === '*') {
                prev *= num
            } else if (sign === '/') {
                prev = Math.trunc(prev/num)
            }
            if (char === ')') return {i, num: result+prev}
            num = 0
            sign = char
        }
    }
    return result+prev
    };
