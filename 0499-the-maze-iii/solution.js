/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function (maze, ball, hole) {
    const rows = maze.length, cols = maze[0].length
    const visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
    const path = []
    const validPos = (row, col) => !(row < 0 || row >= rows || col < 0 || col >= cols)
    const walkDown = (row, col, count) => {
        let nRow = row, nCol = col
        while (row + 1 < rows && maze[row + 1][col] === 0) {
            if (visited[row + 1][col]) {
                return [nRow, nCol, count]
            }
            count++
            if (row + 1 === hole[0] && col === hole[1]) {
                return [row + 1, col, count]
            }
            row++
        }
        return [row, col, count]

    }
    const walkUp = (row, col, count) => {
        let nRow = row, nCol = col
        while (row - 1 >= 0 && maze[row - 1][col] === 0) {
            if (visited[row - 1][col]) {
                return [nRow, nCol, count]
            }
            count++
            if (row - 1 === hole[0] && col === hole[1]) {
                return [row - 1, col, count]
            }
            row--
        }
        return [row, col, count]

    }
    const walkRight = (row, col, count) => {
        let nRow = row, nCol = col
        while (col + 1 < cols && maze[row][col + 1] === 0) {
            if (visited[row][col + 1]) {
                return [nRow, nCol, count]
            }
            count++
            if (row === hole[0] && col + 1 === hole[1]) {
                return [row, col + 1, count]
            }
            col++
        }
        return [row, col, count]

    }
    const walkLeft = (row, col, count) => {
        let nRow = row, nCol = col
        while (col - 1 >= 0 && maze[row][col - 1] === 0) {
            if (visited[row][col - 1]) {
                return [nRow, nCol, count]
            }
            count++
            if (row === hole[0] && col - 1 === hole[1]) {
                return [row, col - 1, count]
            }
            col--
        }
        return [row, col, count]
    }
    const getPath = (sign, row, col, count = 0) => {
        if (sign === 'd') {
            return walkDown(row, col, count)
        } else if (sign === 'l') {
            return walkLeft(row, col, count)
        } else if (sign === 'r') {
            return walkRight(row, col, count)
        } else {
            return walkUp(row, col, count)
        }
    }
    const dfs = (row, col, count, res, sign) => {
        if (!validPos(row, col)) {
            return false
        }
        if (maze[row][col] == 1) {
            return false
        }
        if (visited[row][col]) {
            return
        }
        res.push(sign)
        if (row == hole[0] && col == hole[1]) {
            path.push([res, count])
            return res
        }
        visited[row][col] = true
        dfs(...getPath('l', row, col, count), [...res], 'l')
        dfs(...getPath('d', row, col, count), [...res], 'd')
        dfs(...getPath('r', row, col, count), [...res], 'r')
        dfs(...getPath('u', row, col, count), [...res], 'u')
        visited[row][col] = false
    }
    dfs(ball[0], ball[1], 0, [], '')
    if (!path.length) {
        return 'impossible'
    }
    let minArr = [path[0]]
    let start = path[0]
    for (let i = 1; i < path.length; i++) {
        if (path[i][1] < start[1]) {
            minArr = []
            start = path[i]
        }
        if (path[i][1] == start[1]) {
            minArr.push(path[i])
        }
    }
    const newArr = minArr.map((v) => v[0].join('')).sort()
    return newArr[0]
};
