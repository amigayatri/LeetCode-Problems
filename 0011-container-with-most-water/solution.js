/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1
    let maxArea = -1, area
    while (left < right) {
        area = Math.min(height[left], height[right])*(right-left)
        maxArea = Math.max(maxArea, area)
        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};
