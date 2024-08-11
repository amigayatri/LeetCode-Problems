/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = []
    const generate = (comb = [], firstNum = 1) => {
        if (comb.length === k) {
            res.push([...comb])
            return
        }
        const need = k - comb.length
        for (let num = firstNum; num <= n-need+1; num++) {
            comb.push(num)
            generate(comb, num + 1)
            comb.pop()
        }
    }
    generate()
    return res
};
