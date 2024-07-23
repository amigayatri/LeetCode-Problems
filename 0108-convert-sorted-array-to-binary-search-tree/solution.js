/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const insertInterval = (left, right) => {
        if (left > right) return null
        const middle = (left+right)>>1
        let root = new TreeNode(nums[middle])
        root.left = insertInterval(left, middle-1)
        root.right = insertInterval(middle+1, right)
        return root
    }
    return insertInterval(0, nums.length-1)
};
