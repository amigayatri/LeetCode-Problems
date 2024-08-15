/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    const n = letters.length
    let left = 0, right = n
    if (letters[n - 1] < target) return letters[0]
    if (letters[0] > target) return letters[0]
    while (left < right) {
        const mid = (left + right) >> 1
        if (letters[mid] > target) {
            if (mid > 0 && letters[mid - 1] <= target) {
                return letters[mid]
            } else {
                right = mid
            }
        } else {
            left = mid + 1

        }
    }
    if (left == n) return letters[0]
    return letters[left]
};
