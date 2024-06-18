/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (heights.length == 0) return []
    const rows = heights.length, columns = heights[0].length
    let pStack = [], aStack = []
    
    const bfs = (stack, heights) => {
        let reachable = new Array(rows).fill().map(() => new Array(columns).fill(false))
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        while(stack.length > 0) {
            let [r, c] = stack.pop()
            reachable[r][c] = true
            for (let [rowOffset, colOffset] of directions) {
                const newRow = r + rowOffset
                const newCol = c + colOffset
                if (newRow < 0 || newCol < 0 || newRow > rows-1 || newCol > columns-1) continue
                if (reachable[newRow][newCol]) continue
                if (heights[newRow][newCol] < heights[r][c]) continue
                stack.push([newRow, newCol])
            }
        }
        return reachable
    }
    for (let r = 0; r < rows; r++) {
        pStack.push([r, 0])
        aStack.push([r, columns-1])
    }
    for (let c = 0; c < columns; c++) {
        pStack.push([0, c])
        aStack.push([rows-1, c])
    }
    let pConnected = bfs(pStack, heights)
    let aConnected = bfs(aStack, heights)
    let commonCells = []
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (pConnected[r][c] && aConnected[r][c]) {
                commonCells.push([r, c])
            }
        }
    }
    return commonCells
};
