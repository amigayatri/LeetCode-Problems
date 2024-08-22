/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (n) {
    const bin = n.toString(2), compArr = []
    const one = '1', zero = '0'
    for (let b of bin) {
        if (b == one) compArr.push(zero)
        else compArr.push(one)
    }
    const comp = parseInt(compArr.join(''), 2)
    return comp
};
