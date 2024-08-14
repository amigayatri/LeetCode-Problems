/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const n = salary.length
    let sum = 0, max = 999, min = 1000001
    for (const sal of salary) {
        sum += sal
        if (sal > max) max = sal
        if (sal < min) min = sal
    }
    sum -= max+min
    return sum/(n-2)
};
