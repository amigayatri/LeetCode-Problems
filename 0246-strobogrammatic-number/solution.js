/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const rotatedDigits = new Map([['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']])
    for (let left = 0, right = num.length-1; left <= right; left++, right--) {
        const leftChar = num.charAt(left), rightChar = num.charAt(right)
        if (!rotatedDigits.has(leftChar) || rotatedDigits.get(leftChar) !== rightChar) {
            return false
        }
    }
    return true
};
