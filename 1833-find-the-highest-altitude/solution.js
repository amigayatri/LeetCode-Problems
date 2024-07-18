/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const n = gain.length
    let currentAltitude = 0
    let largest = 0
    for (let i = 0; i < n; i++) {
        currentAltitude += gain[i]
        if (currentAltitude > largest) largest = currentAltitude
    }
    return largest
};
