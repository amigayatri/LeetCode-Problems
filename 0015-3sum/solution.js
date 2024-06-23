/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = new Set()
    const seen = new Map()
    const dups = new Set()
    let complement, triplet
    for (let i = 0; i < nums.length; i++) {
        if (!dups.has(nums[i])) {
            dups.add(nums[i])
            for (let j = i+1; j < nums.length; j++) {
                complement = 0 - nums[i] - nums[j]
                if(seen.has(complement) && seen.get(complement) === i) {
                    triplet = [nums[i], nums[j], complement].sort((a, b) => a - b)
                    answer.add(JSON.stringify(triplet))
                }
                seen.set(nums[j], i)
            }
        }
        
    }
    return Array.from(answer, JSON.parse)
};
