/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const addedToMap = (map, key, value) => {
    if (!map.has(key)) {
        map.set(key, value)
    } else if (map.get(key) != value) return false
    return true
}
var isIsomorphic = function (s, t) {
    let mapS = new Map(), mapT = new Map()
    const n = s.length
    for (let i = 0; i < n; i++) {
        if (!addedToMap(mapS, s[i], t[i]) || !addedToMap(mapT, t[i], s[i])) return false
    }
    return true
};
