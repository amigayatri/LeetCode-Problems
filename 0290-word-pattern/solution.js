const addedToMap = (map, key, value) => {
    if (!map.has(key)) {
        map.set(key, value)
    } else if (map.get(key) != value) return false
    return true
}
var wordPattern = function(pattern, s) {
    const words = s.split(' ')
    const n = pattern.length
    if (words.length != n) return false
    let wordMap = new Map(), patternMap = new Map()
    for (let i = 0; i < n; i++) {
        if (!addedToMap(wordMap, words[i], pattern[i]) || !addedToMap(patternMap, pattern[i], words[i])) return false
    }
    return true
};
