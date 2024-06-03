/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length-1, sum, mid
    let loopCounter = 0
    while(left < right) {
        loopCounter++
        sum = numbers[left] + numbers[right]
        if (sum === target) {
            console.log(loopCounter)
            return [left+1, right+1]
        }
        mid = left + ((right - left + 1) >> 1)
        console.log(left, right, mid)
        if (sum < target) {
            if((numbers[mid] + numbers[right]) < target) {
                left = mid
            }
            left++
        } else {
            if (numbers[left] + numbers[mid] > target) {
                right = mid
            }
            right--
        }
    }
    console.log(loopCounter)
    return [-1, -1]
};
