class TicTacToe {
    constructor(n) {
        this.cols = Array.from({length: n}, () => 0)
        this.rows = Array.from({length: n}, () => 0)
        this.diag = 0
        this.antiDiag = 0
        this.n = n
    }

    move(row, col, player) {
        const points = player == 1? 1 : -1
        const n = this.n
        this.rows[row] += points
        this.cols[col] += points
        if (row == col) this.diag += points
        if (row == n-1-col) this.antiDiag += points

        if (Math.abs(this.rows[row]) == n || Math.abs(this.cols[col]) == n || Math.abs(this.antiDiag) == n || Math.abs(this.diag) == n)  {
            return player
        } else {
            return 0
        }
    }
}
