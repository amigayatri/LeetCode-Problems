/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    const n = nums.length
    let maxNum = nums[0]
    for(let num of nums) maxNum = Math.max(maxNum, num)

    let L = maxNum.toString(2).length
    let maxXor = 0, currXor
    let prefixes = new Set()
    for (let i = L-1; i > -1; i--) {
        maxXor <<= 1
        currXor = maxXor | 1
        prefixes.clear()
        for (let num of nums) prefixes.add(num >> i)
        for (let p of prefixes) {
            if (prefixes.has(currXor^p)) {
                maxXor = currXor
                break
            }
        }
    }
    return maxXor
};
