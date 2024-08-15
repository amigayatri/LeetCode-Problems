/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let nFive = 0, nTen = 0, nTwenty = 0
    for (let bill of bills) {
        if (bill == 5) {
            nFive++
        } else if (bill == 10) {
            if (nFive == 0) return false
            nFive--
            nTen++
        } else {
            nTwenty++
            if (nFive == 0) return false
            if (nTen > 0) {
                nTen--
                nFive--
            } else {
                if (nFive < 3) return false
                nFive -= 3
            }
        }
    }
    return true
};
