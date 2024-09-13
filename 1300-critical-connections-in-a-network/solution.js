/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */

var criticalConnections = function (n, connections) {
    const criticalsArr = []
    class Graph {
        constructor() {
            this.graph = new Map()
            this.rank = new Map()
            this.connDict = new Set()
            this.createGraph()
        }

        createKey = (u, v) => {
            if (u <= v) return `${u}->${v}`
            return `${v}->${u}`
        }

        createGraph = () => {
            for (let i = 0; i < n; i++) {
                this.graph.set(i, [])
                this.rank.set(i, null)
            }
            for (const [server1, server2] of connections) {
                this.graph.get(server1).push(server2)
                this.graph.get(server2).push(server1)
                this.connDict.add(this.createKey(server1, server2))
            }
        }

        dfs = (node, discoveryRank) => {
            const prevRank = this.rank.get(node)
            if (prevRank != null) return prevRank
            this.rank.set(node, discoveryRank)
            let minRank = discoveryRank + 1
            const neighbors = this.graph.get(node)
            for (const neighbor of neighbors) {
                const neighborRank = this.rank.get(neighbor)
                if (neighborRank !== null &&
                    neighborRank == discoveryRank - 1) {
                    continue
                }
                const recursiveRank = this.dfs(neighbor, discoveryRank + 1)
                if (recursiveRank <= discoveryRank) {
                    const key = this.createKey(node, neighbor)
                    this.connDict.delete(key)
                }
                if (recursiveRank < minRank) minRank = recursiveRank
            }
            return minRank
        }

        convertCriticals = () => {
            for (const key of this.connDict) {
                const [u, v] = key.split('->')
                criticalsArr.push([u, v])
            }
        }

        getCriticals = () => {
            this.dfs(0, 0)
            this.convertCriticals()
        }
    }
    const graph = new Graph()
    graph.getCriticals()
    return criticalsArr
};
