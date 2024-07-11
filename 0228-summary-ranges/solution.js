/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
     if (nums.length === 0) return []
    let ranges = []
    let start = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1]

        if (nums[i] !== prev + 1) {
            if (start === prev) {
                ranges.push(`${start}`)
            } else {
                ranges.push(`${start}->${prev}`)
            }
            start = nums[i]
        }
    }
    let last = nums[nums.length -1]
    if (start === last) {
            ranges.push(`${start}`)
        } else {
            ranges.push(`${start}->${last}`)
        }

    return ranges 
};
