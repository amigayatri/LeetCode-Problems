class TwoSum {
    constructor() {
        this.min = Number.MAX_SAFE_INTEGER
        this.max = Number.MIN_SAFE_INTEGER
        this.count = 0
        this.numbers = new Map()
    }

    add(number) {
        if (number < this.min) this.min = number
        if (number > this.max) this.max = number
        !this.numbers.has(number) && this.numbers.set(number, 0)
        const c = this.numbers.get(number)
        this.numbers.set(number, c + 1)
        this.count++
    }

    find(value) {
        if (this.count < 2 || value < 2 * this.min || value > 2 * this.max) return false
        const half = Math.ceil(value / 2)
        const limit = Math.min(this.max, half)
        for (let i = this.min; i <= limit; i++) {
            if (this.numbers.has(i) && this.numbers.has(value - i)) {
                if (i === value - i && this.numbers.get(i) < 2) {
                    return false
                }
                return true
            }
        }

        return false
    }
}
