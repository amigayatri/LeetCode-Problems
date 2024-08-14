/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let sign = 1
    for (let num of nums) {
        if (num < 0) sign *= -1
        else if (num === 0) return 0
    }
    return sign
};
