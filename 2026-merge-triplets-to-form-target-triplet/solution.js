/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
    let possibleX = false, possibleY = false, possibleZ = false
    const targetX = target[0], targetY = target[1], targetZ = target[2]
    for (let [x, y, z] of triplets) {
        if (x <= targetX && y <= targetY && z <= targetZ) {
            if (x == targetX) possibleX = true
            if (y == targetY) possibleY = true
            if (z == targetZ) possibleZ = true
            if(possibleX && possibleY && possibleZ) return true
        }
    }
    return false
};
