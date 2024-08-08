/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length
    let res = 0
    const visited = new Array(n).fill(false)
    const dfs = (idx) => {
        visited[idx] = true
        for (let adj = 0; adj < n; adj++) {
            if (isConnected[idx][adj] == 1 && !visited[adj]) {
                dfs(adj)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i)
            res++
        }
    }
    return res
};
