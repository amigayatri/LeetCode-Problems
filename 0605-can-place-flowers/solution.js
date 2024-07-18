/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    const l = flowerbed.length
    for (let i = 0; i < l; i++) {
        if (flowerbed[i] == 0) {
            const emptyLeftPlot = (i == 0) || (flowerbed[i - 1] == 0)
            const emptyRightPlot = (i == l - 1) || (flowerbed[i + 1] == 0)
            if (emptyLeftPlot && emptyRightPlot) {
                flowerbed[i] = 1
                count++
                if (count >= n) {
                    return true;
                }
            }
        }

    }
    return count >= n
};
