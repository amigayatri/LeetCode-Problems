/**
 * @param {number[][]} points
 * @return {number}
 */
const calculateWeight = (point1, point2) => {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
}
const getItem = (item) => {
    const priority = item.priority
    const element = item.element
    return [priority, element]
}
var minCostConnectPoints = function (points) {
    const n = points.length
    let inMST = new Array(n).fill(false)
    let minDist = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    minDist[0] = 0
    let mstCost = 0, edgesUsed = 0
    while (edgesUsed < n) {
        let currMinEdge = Number.MAX_SAFE_INTEGER
        let currNode = -1
        for (let node = 0; node < n; node++) {
            if(!inMST[node] && currMinEdge > minDist[node]) {
                currMinEdge = minDist[node]
                currNode = node
            }
        }
        mstCost += currMinEdge
        edgesUsed++
        inMST[currNode] = true
        for (let nextNode = 0; nextNode < n; nextNode++) {
            const weight = calculateWeight(points[currNode], points[nextNode])
            if (!inMST[nextNode] && minDist[nextNode] > weight) {
                minDist[nextNode] = weight
            }
        }
    }
    return mstCost
};
