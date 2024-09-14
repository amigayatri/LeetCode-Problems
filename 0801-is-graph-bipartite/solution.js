/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const n = graph.length
    const nextColor = (color) => (color + 1) % 2
    const colors = Array.from({length: n}, () => -1)
    const colorGraph = (start, colorIdx = 0) => {
        if (start >= n) return false
        if (colors[start] != -1) return true
        let stack = [start]
        colors[start] = colorIdx
        while (stack.length > 0) {
            const node = stack.pop(), color = colors[node]
            const next = nextColor(color)
            for (const neigh of graph[node]) {
                if (colors[neigh] == -1) {
                    stack.push(neigh)
                    colors[neigh] = next
                } else if (colors[neigh] == colors[node]) {
                    return false
                }
            }
        }
        return true
    }
    for (let start = 0; start < n; start++) {
        if (colors[start] == -1) {
            if (!colorGraph(start)) return false
        }
    }
    return true
};
