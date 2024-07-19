/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let pairs = 0
    const n = nums.length
    let complements = new Map()
    for (let i = 0; i < n; i++){
        const num = nums[i]
        if (!complements.has(num)) complements.set(num, 0)
        const count = complements.get(num)
        complements.set(num, count+1)
    }
    for(let i = 0; i < n; i++) {
        const curr = nums[i]
        const comp =k - curr
        if (complements.get(curr) > 0 && complements.get(comp) > 0) {
            if (comp == curr) {
                const count = complements.get(curr)
                if (count < 2) {
                    continue
                } else if (count == 2) {
                    pairs++
                    complements.delete(curr)
                    continue
                } else {
                    pairs++
                    complements.set(curr, count - 2)
                    continue
                }
            }
            const currCount = complements.get(curr), compCount = complements.get(comp)
            if (currCount > 1) complements.set(curr, currCount-1)
            else complements.delete(curr)
            if (compCount > 1) complements.set(comp, compCount-1)
            else complements.delete(comp)
            pairs++
        }
    }
    return pairs
};
