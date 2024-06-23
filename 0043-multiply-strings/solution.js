/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const populateMap = (limit) => {
        let map = new Map()
        const zero = 48
        for (let i = 0; i < limit; i++) {
            const char = String.fromCharCode(i + zero)
            map.set(char, i)
        }
        return map
    }
    let digitConversion = populateMap(10)
    const multiplyDigit = (num, d, position) => {
        if (d === 0) return [0]
        const n = num.length
        let result = []
        let carry = 0
        let nonZero = false
        for (let i = n - 1; i >= 0; i--) {
            const d2 = digitConversion.get(num[i])
            const r = d * d2 + carry
            if (!nonZero && r != 0) nonZero = true
            result.unshift(r % 10)
            carry = Math.floor(r / 10)
        }
        if (carry != 0) result.unshift(carry)
        for (let i = 0; i < position && nonZero; i++) {
            result.push(0)
        }
        return result
    }
    const sum = (num1, num2) => {
        const n = num1.length, m = num2.length
        let result = []
        let carry = 0
        for (let i = 0; i < n || i < m; i++) {
            let r = carry
            if (n - 1 - i >= 0) r += num1[n - 1 - i]
            if (m - 1 - i >= 0) r += num2[m - 1 - i]
            result.unshift(r % 10)
            carry = Math.floor(r / 10)
        }
        if (carry != 0) result.unshift(carry)
        return result
    }
    const n1 = num1.length
    let result = []
    for (let i = 0; i < n1; i++) {
        const d = digitConversion.get(num1[n1 - 1 - i])
        const localResult = multiplyDigit(num2, d, i)
        result = sum(localResult, result)
    }
    return result.join('')
};
