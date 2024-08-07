/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arr = new Array(n+1)
    let un2 = 1, un3 = 1, un5 = 1
    arr[1] = 1
    for (let i = 2; i <= n; i++) {
        let val2 = arr[un2] *2
        let val3 = arr[un3] * 3
        let val5 = arr[un5] * 5
        let nextUgly = Math.min(val2, val3, val5)
        arr[i] = nextUgly
        if (nextUgly == val2) un2++
        if (nextUgly == val3) un3++
        if(nextUgly == val5) un5++
    }
    return arr[n]
};
