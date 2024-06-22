/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const n = a.length, m = b.length
    if (n < m) return addBinary(b, a)
    const subtract = (x, y) => {
        while (y != 0) {
            let borrow = (~x) & y;
            x = x ^ y;
            y = borrow << 1;
        }
        return x;
    }
    const add = (x, y) => {
        while (y != 0) {
            let carry = x & y;
            x = x ^ y;
            y = carry << 1;
        }
        return x;
    }
    let result = []
    let carry = 0, j = subtract(m, 1)
    for (let i = subtract(n, 1); i >= 0; i = subtract(i, 1)) {
        if (a[i] === "1") carry = add(carry, 1)
        if (j >= 0 && b[j] === "1") carry = add(carry, 1)
        result.push((carry & 1).toString())
        carry = carry >> 1
        j = subtract(j, 1)
    }
    if (carry === 1) result.push("1")
    return result.reverse().join("")
};
