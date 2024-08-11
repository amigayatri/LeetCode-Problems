/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let results = []
    candidates.sort((a, b) => a - b)
    const backtrack = (remain = target, comb = [], start = 0) => {
        if (remain < 0) {
            return
        }
        if (remain === 0) {
            results.push([...comb])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (remain >= candidates[i]) {
                comb.push(candidates[i])
                backtrack(remain - candidates[i], comb, i)
                comb.pop()
            } else {
                break
            }
        }
    }
    backtrack()
    return results
};
