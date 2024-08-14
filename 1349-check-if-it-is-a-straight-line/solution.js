/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const n = coordinates.length
    const first = coordinates[0]
    const second = coordinates[1]
    const xDelta = second[0]-first[0], yDelta = second[1]-first[1]
    for (let i = 2; i < n; i++) {
        const curr = coordinates[i]
        if (yDelta*(curr[0]-first[0]) !== xDelta*(curr[1]-first[1])) return false
    }
    return true
};
