/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    const getSum = (value, n) => {
        let count = 0
        if (value > index) {
            count += Math.floor((value+value-index)*(index+1)/2)
        } else {
            count += Math.floor((value+1)*value/2)+index-value+1
        }
        if (value >= n-index) {
            count += Math.floor((value+value-n+1+index)*(n-index)/2)
        } else {
            count += Math.floor((value+1)*value/2)+n-index-value
        }
        return count-value
    }
    let left = 1, right = maxSum
    while (left < right) {
        const mid = (left+right+1)>>1
        if (getSum(mid, n) <= maxSum) {
            left = mid
        } else {
            right = mid-1
        }
    }
    return left
};
