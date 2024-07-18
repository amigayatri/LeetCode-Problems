class StockSpanner {
    constructor() {
        this.stack = []
    }

    next(price) {
        let count = 1
        while (this.stack.length != 0 && this.stack[this.stack.length-1][0] <= price) {
            count += this.stack[this.stack.length-1][1]
            this.stack.pop()
        }
        this.stack.push([price, count])
        return count
    }
}
