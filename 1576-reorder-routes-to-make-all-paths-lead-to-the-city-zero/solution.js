/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let count = 0
    let adj = new Array(n).fill().map(_ => [])
    let bfs = (node) => {
        let q = new Queue()
        let visit = new Array(n).fill(false)
        q.enqueue(node)
        visit[node] = true
        while (!q.isEmpty()) {
            node = q.dequeue()
            for (let [neighbor, sign] of adj[node]) {
                if (!visit[neighbor]) {
                    count += sign
                    visit[neighbor] = true
                    q.enqueue(neighbor)
                }
            }

        }
    }
    for (const [idxA, idxB] of connections) {
      adj[idxA].push([idxB, 1])
      adj[idxB].push([idxA, 0])
    }
    bfs(0)
    return count
};
