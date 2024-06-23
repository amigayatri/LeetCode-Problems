/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const n = num1.length, m = num2.length
    let result = []
    let carry = 0
    for (let i = 0; i < n || i < m; i++) {
        let r = carry
        if (n-1-i >= 0) r += Number(num1[n - 1 - i])
        if (m - 1 - i >= 0) r += Number(num2[m - 1 - i])
        result.unshift(r%10)
        carry = Math.floor(r / 10)
    }
    if (carry != 0) result.unshift(carry)
    return result.join('')
};
