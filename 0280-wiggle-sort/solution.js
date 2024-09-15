const wiggleSort = function (nums) {
    const swap = (i, j) => {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (((i&1) == 0 && nums[i] > nums[i+1]) || 
            ((i&1) == 1 && nums[i] < nums[i+1])) {
            swap(i, i+1)
        }
    }
};
