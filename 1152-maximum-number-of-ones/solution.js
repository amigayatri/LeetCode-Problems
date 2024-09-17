/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
var maximumNumberOfOnes = function(width, height, sideLength, maxOnes) {
    const count = []
    for(let r = 0; r < sideLength; r++) {
        for (let c = 0; c < sideLength; c++) {
            const colMax = 1 + Math.floor((height-r-1)/sideLength)
            const rowMax = 1 + Math.floor((width-c-1)/sideLength)
            count.push(colMax*rowMax)
        }
    }
    count.sort((b, a) => a-b)
    return count.slice(0, maxOnes).reduce((a, x) => a+x, 0)
};
