/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length
    let result = new Array(n).fill(false)
    let maxCandies = -1
    for (let candy of candies) {
        if (candy > maxCandies) maxCandies = candy
    }
    for (let i = 0; i < n; i++) {
        if (candies[i]+extraCandies >= maxCandies) {
            result[i] = true
        }
    }
    return result
};
