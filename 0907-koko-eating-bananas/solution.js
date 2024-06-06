/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1, right = 1
    for (const pile of piles) right = Math.max(right, pile)
    if (piles.length % h === 0) {
        return right
    } else {
        const calculateHours = (piles, min, max, middle) => {
            const speed = {
                min,
                max,
                middle
            }
            let hourSpent = {
                min: 0,
                max: 0,
                middle: 0
            }
            for (const pile of piles) {
                hourSpent.min += Math.ceil(pile / speed.min)
                hourSpent.max += Math.ceil(pile / speed.max)
                hourSpent.middle += Math.ceil(pile / speed.middle)
            }
            return hourSpent
        }
        while (left < right) {
            let middle = (left + right) >> 1
            let hourSpent = calculateHours(piles, left, right, middle)
            if (hourSpent.min <= h) {
                return left
            } else if (hourSpent.middle <= h) {
                right = middle
            } else {
                left = middle + 1
            }
        }
        return left
    }
};
