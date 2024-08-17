/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
    const n = sentence1.length
    if (sentence2.length !== n) return false
    const dict = new Set()
    for (let i = 0; i < similarPairs.length; i++) {
        const key1 = `${similarPairs[i][0]}->${similarPairs[i][1]}`
        dict.add(key1)
    }

    for (let i = 0; i < n; i++) {
        if (sentence1[i] == sentence2[i]) continue
        const key1 = `${sentence1[i]}->${sentence2[i]}`
        if (dict.has(key1)) continue
        const key2 = `${sentence2[i]}->${sentence1[i]}`
        if (dict.has(key2)) continue
        return false
    }
    return true
};
