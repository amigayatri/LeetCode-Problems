/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjacency = new Array(numCourses).fill(false)
    let indegree = new Array(numCourses).fill(0)
    for (let [req, course] of prerequisites) {
        if (course === req) return false
        if (!adjacency[course]) adjacency[course] = []
        adjacency[course].push(req)
        indegree[req]++
    }
    let queue = []
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.push(i)
        }
    }

    let nodesVisited = 0, topologicalOrder = []
    while(queue.length > 0) {
        const node = queue.shift()
        topologicalOrder.push(node)
        nodesVisited++
        if (!adjacency[node]) continue
        for (let neighbor of adjacency[node]) {
            indegree[neighbor]--
            if (indegree[neighbor] == 0) {
                queue.push(neighbor)
            }
        }
    }
    if (topologicalOrder.length == numCourses) return topologicalOrder
    return []
};
