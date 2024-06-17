/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]
    const rows = grid.length, columns = grid[0].length
    let maxArea = 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (grid[row][col] == '1') {
                let stack = [[ row, col ]]
                grid[row][col] = '0'
                let shape = 0
                while (stack.length > 0) {
                    const [r, c] = stack.pop()
                    shape++
                    for (let [rowOffset, colOffset] of directions) {
                        const posR = r + rowOffset
                        const posC = c + colOffset
                        if (posR < 0 || posC < 0 || posR > rows - 1 || posC > columns - 1) continue
                        if (grid[posR][posC] != '1') continue
                        grid[posR][posC] = '0'
                        stack.push([posR, posC])
                    }
                }
                maxArea = Math.max(maxArea, shape)
            }
        }
    }
    return maxArea
};
