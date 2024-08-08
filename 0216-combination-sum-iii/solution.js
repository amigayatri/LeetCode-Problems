/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let results = [], comb = []

    const backtrack = (remain, k, comb, nextStart, results) => {
        if (remain === 0 && comb.length === k) {
            results.push(Array.from(comb))
        }
        if (remain < 0 || comb.length == k) {
            return
        }
        for (let i = nextStart; i < 9; i++) {
            comb.push(i + 1)
            backtrack(remain - i - 1, k, comb, i + 1, results)
            comb.pop()
        }
    }
    backtrack(n, k, comb, 0, results)
    return results
};
