/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const representative = Array.from({length: 26}, (_, i) => i)
    const find = (x) => {
        if (representative[x] == x) return x
        return representative[x] = find(representative[x])
    }
    const performUnion = (x, y) => {
        const rootX = find(x), rootY = find(y)
        if (rootX == rootY) return
        if (rootX < rootY) {
            representative[rootY] = rootX
        } else {
            representative[rootX] = rootY
        }
    }
    const n = s1.length
    const getCharCodes = (c1, c2 = false) => {
        if (c2 === false) return c1.charCodeAt(0)-'a'.charCodeAt(0) 
        return [c1.charCodeAt(0)-'a'.charCodeAt(0), c2.charCodeAt(0)-'a'.charCodeAt(0)]
    }
    for(let i = 0; i < n; i++) {
        performUnion(...getCharCodes(s1.charAt(i), s2.charAt(i)))
    }
    const ans = []
    for (const c of baseStr.split('')) {
        const newCharCode = find(c.charCodeAt(0)-'a'.charCodeAt(0)) + 'a'.charCodeAt(0)
        ans.push(String.fromCharCode(newCharCode))
    }
    return ans.join('')
};
