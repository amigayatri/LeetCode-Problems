/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = num.toString()
    const n = numStr.length
    let res = [], i = 0
    for (; i < n; i++) {
        if (numStr.charAt(i) == '9') {
            res.push('9')
        } else {
            res.push(9)
            res.push(numStr.substring(i+1))
            break
        }
    }
    res = res.join('')
    return res
};
