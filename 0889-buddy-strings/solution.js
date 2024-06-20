/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false
    if (s == goal) {
        let frequency = new Set()
        for (let c of s) {
            if (frequency.has(c)) return true
            frequency.add(c)
        }
        return false
    }
    let diff = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) diff.push(i)
    }
    if (diff.length > 2) return false
    return (s[diff[0]] == goal[diff[1]] && s[diff[1]] == goal[diff[0]])
};
