/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const n = obstacles.length
    const answer = new Array(n), lis = new Array(n)
    let lisLength = 0
    const bisectRight = (arr, target, right) => {
        let left = 0
        while (left < right) {
            const mid = (right+left)>>1
            if (arr[mid] <= target) {
                left = mid+1
            } else {
                right = mid
            }
        }
        return left
    }
    for (let i = 0; i < n; i++) {
        const height = obstacles[i]
        const idx = bisectRight(lis, height, lisLength)
        if (idx == lisLength) lisLength++
        lis[idx] = height
        answer[i] = idx+1
    }
    return answer
};
