/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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
        let prev = -1
        for (let i = start; i < candidates.length; i++) {
            const cand = candidates[i]
            if (remain >= cand) {
                if (cand !== prev) {
                    comb.push(cand)
                    backtrack(remain - cand, comb, i + 1)
                    comb.pop()
                }
                prev = cand
            } else {
                break
            }
        }
    }
    backtrack()
    return results
};
