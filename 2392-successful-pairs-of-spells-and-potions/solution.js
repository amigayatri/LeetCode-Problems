/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a-b)
    const findBigger = (val) => {
        let left = 0, right = potions.length
        while (left < right) {
            const mid = ((right + left) >> 1)
            if (potions[mid] < val) left = mid+1
            else right = mid
        }
        return left
    }
    let countSuccess = function (spell) {
        const minPotion = Math.ceil(success/spell)
        let count
        if (potions[0] > minPotion) count = potions.length
        else if (potions[potions.length-1] < minPotion) count = 0
        else {
            count = potions.length - (findBigger(minPotion))
        }
        return count
    }
    let mapAnswer = new Map()
    let answer = new Array(spells.length).fill(0)
    for (const i in spells) {
        let count
        if (mapAnswer.has(spells[i])) count = mapAnswer.get(spells[i])
        else count = countSuccess(spells[i])
        answer[i] = count
        if (!mapAnswer.has(spells[i])) mapAnswer.set(spells[i], count)
    }
    return answer
};
