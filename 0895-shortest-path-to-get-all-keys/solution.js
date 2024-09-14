const shortestPathAllKeys = function (grid) {
    const hash = char => 1 <<((char.charCodeAt()&31)-1)
    const isKey = char => /[abcdef]/.test(char)
    const isLock = char => /[ABCDEF]/.test(char)
    const canOpen = (keys, lock) => keys & hash(lock) ? true : false
    const rows = grid.length, cols = grid[0].length
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const queue = new Queue()
    const visited = Array.from({length: rows}, () => Array.from({length: cols}, () => []))
    const validCell = (row, col) => !(row < 0 || row >= rows || col < 0 || col >= cols)
    let keyCount = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c]
            if (cell === '@') queue.push([r, c, 0, 0])
            else if (isKey(cell)) keyCount++
        }
    }
    const fullKeyChain = 2**keyCount-1
    while (!queue.isEmpty()) {
        let [r, c, d, keys] = queue.pop()
        if (!validCell(r, c)) continue
        const cell = grid[r][c]
        if (visited[r][c][keys] || cell === "#") continue
        visited[r][c][keys] = true
        if (isLock(cell) && !canOpen(keys, cell)) continue
        if(isKey(cell)) keys |= hash(cell)
        if (keys === fullKeyChain) return d
        for (const [rowOff, colOff] of directions) {
            queue.push([r+rowOff, c+colOff, d+1, keys])
        }
    }
    return -1
};
