/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0
    while (x !== 0) {
        let pop = x % 10
        x = (x - pop)/10
        if (rev > Math.pow(2, 31)/10 || (rev == Math.pow(2, 31)/10 && pop > 7)) return 0
        if (rev < Math.pow(-2, 31)/10 || (rev == Math.pow(-2, 31) / 10 && pop < -8)) return 0
        rev = rev*10 + pop
    }
    return rev
};
