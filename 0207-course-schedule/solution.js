/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjacency = new Array(numCourses).fill().map(() => new Array(0))
    let visited = new Array(numCourses).fill(false)
    let inStack = new Array(numCourses).fill(false)

    for (let prerequisite of prerequisites) {
        if (prerequisite[0] === prerequisite[1]) return false
        adjacency[prerequisite[1]].push(prerequisite[0])
    }
    function dfs (node, adjacency, visited, inStack) {
        if (inStack[node]) return true
        if (visited[node]) return false
        visited[node] = true
        inStack[node] = true
        for (let neighbor of adjacency[node]) {
            if(dfs(neighbor, adjacency, visited, inStack)) return true
        }
        inStack[node] = false
        return false
    }
    for (let i = 0; i < numCourses; i++) {
        if(dfs(i, adjacency, visited, inStack)) return false
    }
    return true
};
