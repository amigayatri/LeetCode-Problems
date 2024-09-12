/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
    const numberOfPeople = k+1
    const countPeopleWithChocolate = (maxSweetness) => {
        let currSweetness = 0, peopleWithChocolate = 0
        for (const s of sweetness) {
            currSweetness+= s
            if (currSweetness >= maxSweetness) {
                peopleWithChocolate++
                currSweetness = 0
            }
        }
        return peopleWithChocolate
    }
    let left = Math.min(...sweetness)
    let right = Math.floor(sweetness.reduce((x, y) => x+y)/numberOfPeople)
    while (left < right) {
        const mid = (left+right+1)>>1
        const peopleWithChocolate = countPeopleWithChocolate(mid)
        if (peopleWithChocolate >= numberOfPeople) {
            left = mid
        } else {
            right = mid-1
        }
    }
    return left
};
