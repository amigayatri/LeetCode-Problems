/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const red = 0, blue = 1
    const adj = new Map()
    for (const [start, neighbor] of redEdges) {
        !adj.has(start) && adj.set(start, [])
        adj.get(start).push({neighbor, color: red})
    }
    for(const [start, neighbor] of blueEdges) {
        !adj.has(start) && adj.set(start, [])
        adj.get(start).push({neighbor, color: blue})
    }
    const answer = Array.from({length: n}, () => -1)
    const visit = Array.from({length: n}, () => [false, false])
    const queue = new Queue()
    queue.push({node: 0, steps: 0, prevColor: -1})
    answer[0] = 0
    visit[0][1] = visit[0][0] = true
    while (!queue.isEmpty()){
        const {node, steps, prevColor} = queue.pop()
        if (!adj.has(node)) continue
        for (const {neighbor, color} of adj.get(node)) {
            if (!visit[neighbor][color] && color != prevColor) {
                if(answer[neighbor] == -1) {
                    answer[neighbor] = 1  + steps
                }
                visit[neighbor][color] = true
                queue.push({node: neighbor, steps: 1+steps, prevColor: color})
            }
        }
    }
    return answer
};
