/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true
    let x = Math.floor(num/2)
    while (x*x > num) {
        x = Math.floor((x+Math.floor(num/ x))/ 2)
    }
    return x*x === num
};
