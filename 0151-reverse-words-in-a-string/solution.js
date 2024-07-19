/**
 * @param {string} s
 * @return {string}
 */
 const trimSpaces = (s) => {
    let left = 0, right = s.length - 1
    while (left <= right && s[left] === ' ') left++
    while (left <= right && s[right] === ' ') right--
    let output = []
    while (left <= right) {
        if (s[left] !== " ") output.push(s[left])
        else if (output[output.length-1] !== " ") output.push(s[left])
        left++
    }
    return output
 }
const reverse = (arr, start, end) => {
    while (start < end) {
        const temp = arr[start]
        arr[start++] = arr[end]
        arr[end--] = temp
    }
}
const reverseEachWord = (arr) => {
    const n = arr.length
    let start = 0, end = 0
    while (start < n) {
        while(end < n && arr[end] !== ' ') end++
        reverse(arr, start, end-1)
        start = end + 1
        end++
    }
}
var reverseWords = function(s) {
    let arr = trimSpaces(s)
    reverse(arr, 0, arr.length-1)
    reverseEachWord(arr)
    return arr.join('')
};
