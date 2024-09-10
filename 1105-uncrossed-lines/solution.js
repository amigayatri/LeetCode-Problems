/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const n1 = nums1.length, n2 = nums2.length
    const memo = Array.from({length: n1+1}, () => Array.from({length: n2+1}, () => -1))
    const solve = (pos1, pos2) => {
        if (pos1 <= 0 || pos2 <= 0) {
            return 0
        }
        if (memo[pos1][pos2] != -1) {
            return memo[pos1][pos2]
        }
        let answer
        if (nums1[pos1-1] == nums2[pos2-1]) {
            answer = 1 + solve(pos1-1, pos2-1)
        } else {
            answer = Math.max(solve(pos1, pos2-1), solve(pos1-1, pos2))
        }
        memo[pos1][pos2] = answer
        return answer
    }
    return solve(n1, n2)
};
