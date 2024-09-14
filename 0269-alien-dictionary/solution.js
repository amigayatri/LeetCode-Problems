/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    const graph = new Map()
    const n = words.length
    words.forEach((word) => {word.split('').forEach((char) => graph.set(char, new Set()))})
    for (let i = 0; i < n-1; i++) {
        const top = words[i]
        const down = words[i + 1]
        if (top.length > down.length && top.startsWith(down)){
            return ""
        }
        const minSize = Math.min(top.length, down.length)
        for (let j = 0; j < minSize; j++) {
            if (top.charAt(j) !== down.charAt(j)) {
                graph.set(top.charAt(j), graph.get(top.charAt(j)).add(down.charAt(j)))
                break
            }
        }
    }
    const visiting = new Set(), visited = new Set()
    const res = []
    const dfs = (char) => {
        if (visiting.has(char)) return false
        if (visited.has(char)) return true
        visiting.add(char)
        for (const neighbour of graph.get(char)) {
            if (!dfs(neighbour)) return false
        }
        visiting.delete(char)
        visited.add(char)
        res.push(char)
        return true
    }
    for (const key of graph.keys()) {
        if (!dfs(key)) return ""
    }
    return res.reverse().join('')
};
