/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let left = 2, right = Math.floor(x/2)
    while (left <= right) {
        const pivot = left + Math.floor((right - left)/2)
        const pow = pivot*pivot
        if (pow > x) right = pivot - 1
        else if (pow < x) left = pivot + 1
        else return pivot
    }
    return right
};
