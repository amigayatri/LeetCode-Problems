/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    const robSimple = (nums, start, end) => {
        let t1 = 0; t2 = 0
        for(let i = start; i < end; i++) {
            const temp = t1
            t1 = Math.max(nums[i]+t2, t1)
            t2 = temp
        }
        return t1
    }
    let max1 = robSimple(nums, 0, nums.length-1)
    let max2 = robSimple(nums, 1, nums.length)
    return Math.max(max1, max2)
};
