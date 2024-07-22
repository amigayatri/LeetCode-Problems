var rotate = function(nums, k) {
    const reverse = (start, end) => {
    while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}
    const n = nums.length
    k = k % n
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
};
