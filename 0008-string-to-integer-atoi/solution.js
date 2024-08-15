/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const signs = new Set(['+', '-'])
    const digits = new Map(Array.from({length:10}, (v, i) => [i.toString(), i]))
    const negTwoPow =  (1 << 31)
    const max = (negTwoPow+1)*-1, min = negTwoPow
    let int = 0, started = false, sign = 1
    for (let c of s) {
        if (started) {
            if (digits.has(c)) int = int*10+digits.get(c)
            else break
        } else {
            if (c == ' ') {
                continue
            } else if(signs.has(c)) {
                started = true
                if (c == '-') sign = -1
            } else if (digits.has(c)) {
                int = digits.get(c)
                started = true
            } else {
                break
            }
        }
    }
    int *= sign
    if (int > max) return max
    else if (int < min) return min
    return int
};
