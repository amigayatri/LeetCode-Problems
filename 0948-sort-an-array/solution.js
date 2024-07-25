/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const bucketSort = (placeValue) => {
        let mapDigits = []
        for (let el of nums) {
            const d = Math.floor(Math.abs(el) / placeValue) % 10
            if (mapDigits[d] == undefined) {
                mapDigits[d] = []
            }
            mapDigits[d].push(el)
        }
        let i = 0
        for (let d = 0; d < 10; d++) {
            if (mapDigits[d] == undefined) continue
            mapDigits[d].forEach(val => {
                nums[i] = val
                i++
            })
        }
    }
    let radixSort = () => {
        let maxVal = Math.max(...nums)
        let maxD = 0
        while (maxVal > 0) {
            maxD++
            maxVal /= 10
        }
        let placeValue = 1
        for (let d = 0; d < maxD; d++) {
            bucketSort(placeValue)
            placeValue *= 10
        }
        let negatives = []
        let positives = []
        for (let val of nums) {
            if (val < 0) {
                negatives.push(val)
            } else {
                positives.push(val)
            }
        }
        negatives.reverse()
        nums = [...negatives, ...positives]
    }
    radixSort(nums)
    return nums
};
