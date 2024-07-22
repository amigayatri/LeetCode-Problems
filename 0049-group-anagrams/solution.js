/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const countChars = (string) => {
    let count = new Array(26).fill(0)
    for (let c of string) {
        const idx = c.charCodeAt(0) - 'a'.charCodeAt(0)
        count[idx]++
        }
    let key = ''
    for (let i = 0; i < 26; i++) {
        key += '#' + count[i]
    }
    return key
}
var groupAnagrams = function (strs) {
    let groups = new Map()
    for (let str of strs) {
        const key = countChars(str)
        if (!groups.has(key)) groups.set(key, [])
        groups.get(key).push(str)
    }
    return Array.from(groups.values())
};
