/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const n = nums.length
    const sortedNums = nums.toSorted((a, b) => a-b)
    let count = 0
    for (let i = 0; i < n; i++) {
        let k = i+2
        for(let j = i+1; j < n && sortedNums[i] != 0; j++) {
            while (k < n && sortedNums[i] + sortedNums[j] > sortedNums[k]) {
                k++
            }
            count += k-j-1
        }
    }
    return count
};
