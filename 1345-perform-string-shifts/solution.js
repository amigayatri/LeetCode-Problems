/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shifts) {
    const n = s.length
    let leftPos = 0
    for (const shift of shifts) {
        if (shift[0] == 0) {
            leftPos += shift[1]
        } else {
            leftPos -= shift[1]
        }
    }
    leftPos %= n
    if (leftPos < 0) leftPos += n
    s = s.substring(leftPos) + s.substring(0, leftPos)
    return s
};
