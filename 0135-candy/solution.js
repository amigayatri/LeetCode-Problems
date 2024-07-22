/**
 * @param {number[]} ratings
 * @return {number}
 */
const count = (n) => {
    return (n*(n+1))/2
}
var candy = function(ratings) {
    const n = ratings.length
    if (n == 1) return n
    let candies = 0, up = 0, down = 0, oldSlope = 0
    for (let i = 1; i < n; i++) {
        let newSlope = ratings[i] > ratings[i-1] ? 1 : ratings[i] < ratings[i-1] ? -1 : 0
        if ((oldSlope > 0 && newSlope == 0) || (oldSlope < 0 && newSlope >= 0)) {
            candies += count(up) + count(down) + Math.max(up, down)
            up = 0
            down = 0
        }
        if (newSlope > 0) up++
        else if (newSlope < 0) down++
        else candies++
        oldSlope = newSlope
    }
    candies += count(up) + count(down) + Math.max(up, down) + 1
    return candies
};
