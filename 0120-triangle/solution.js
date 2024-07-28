/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let memoTable = new Map()
    const last = triangle.length-1
    const minPath = (r, c) => {
        let params = `${r}:${c}`
        if (memoTable.has(params)) return memoTable.get(params)
        let path = triangle[r][c]
        if (r < last) {
            path += Math.min(minPath(r+1, c), minPath(r+1, c+1))
        }
        memoTable.set(params, path)
        return path
    }
    return minPath(0, 0)
};
