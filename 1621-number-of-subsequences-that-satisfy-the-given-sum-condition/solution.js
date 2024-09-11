/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const n = nums.length, mod = Math.pow(10, 9)+7
    const powerMap = [1]
    const powerOfTwo = (exp) => {
        if (exp == 0) return 1
        let prev = powerMap.at(-1)
        while (exp >= powerMap.length) {
            const el = (prev*2) % mod
            powerMap.push(el)
            prev = el
        }
        return powerMap[exp]
    }
    const sortedNums = nums.toSorted((a, b) => a-b)
    const binSearchRightmost = (binTarget) => {
        let left = 0, right = n-1
        while (left <= right) {
            const mid = (left+right)>>1
            if (sortedNums[mid] <= binTarget) {
                left = mid+1
            } else {
                right = mid-1
            }
        }
        return left
    }
    let answer = 0
    for (let left = 0; left < n; left++) {
        const right = binSearchRightmost(target-sortedNums[left])-1
        if (right >= left) {
            answer += powerOfTwo(right-left)
            answer %= mod
        }
    }
    return answer
};
