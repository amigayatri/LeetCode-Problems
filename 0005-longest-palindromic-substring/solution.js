/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length
    const expand = (i, j, s) => {
        let left = i, right = j
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left+1, right)
    }
    let answer = ""
    for (let i = 0; i < n; i++) {
        const odd = expand(i, i, s)
        if (odd.length > answer.length) answer = odd
        const even = expand(i, i+1, s)
        if (even.length > answer.length) answer = even
    }
    return answer
};
