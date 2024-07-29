/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const types = new Set(candyType).size;
    if (candyType.length / 2 >= types) return types;
    return candyType.length / 2;
};
