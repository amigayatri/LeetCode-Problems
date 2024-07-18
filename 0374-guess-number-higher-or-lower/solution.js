/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const binaryGuess = (start, end) => {
        if (guess(start) == 0) return start
        if (guess(end) == 0) return end
        const mid = start + Math.floor((end-start)/2)
        const guessMid = guess(mid)
        if (guessMid == 0) {
            return mid
        } else if (guessMid < 0) {
            return binaryGuess(start+1, mid-1)
        } else {
            return binaryGuess(mid+1, end-1)
        }
    }
    return binaryGuess(1, n)
};
