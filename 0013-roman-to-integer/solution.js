/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const n = s.length
    let lastValue = dict[s[n-1]]
    let num = lastValue

    for (let i = n - 2; i >= 0; i--) {
        const c = s[i]
        const value = dict[c]
        if (value < lastValue) num -= value
        else num += value
        lastValue = value
    }
    return num
};
