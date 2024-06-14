/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = []
    let n = nums.length
    for (let i = Math.pow(2, n); i < Math.pow(2, n+1); i++) {
        let bitmask = (i >>>0).toString(2).substring(1)
        let curr = []
        for (let j = 0; j < n; j++) {
            if(bitmask.charAt(j) == "1") curr.push(nums[j])
        }
        output.push(curr)
    }
    return output
};
