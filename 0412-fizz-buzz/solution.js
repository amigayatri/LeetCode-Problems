/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = Array.from({length: n})
    const fizz = 'Fizz', buzz = 'Buzz', both = fizz.concat(buzz)
    for (let num=1; num <= n; num++) {
        const fiveMultiple = ((num%5) == 0)
        const threeMultiple = ((num%3) == 0)
        if (fiveMultiple && threeMultiple) {
            res[num-1] = both
        } else if (threeMultiple) { 
            res[num-1] = fizz
        } else if (fiveMultiple) {
            res[num-1] = buzz
        } else {
            res[num-1] = String(num)
        }
    }
    return res
};
