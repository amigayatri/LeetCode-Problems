class StringIterator {
    constructor(compressedString) {
        const asArr = compressedString.split('')
        const n = asArr.length
        this.elements = new Queue()
        let count = 0, idxLastChar = 0
        for (let i = 1; i < n; i++) {
            const el = asArr[i]
            if (Number.isInteger(Number(el))) {
                count = count * 10 + Number(el)
            } else {
                this.elements.push({ count, el: asArr[idxLastChar] })
                idxLastChar = i
                count = 0
            }
        }
        this.elements.push({ count, el: asArr[idxLastChar] })
    }

    next() {
        if (this.elements.isEmpty()) return ' '
        const front = this.elements.front()
        if (front.count == 1) {
            this.elements.pop()
        } else {
            front.count--
        }
        return front.el
    }

    hasNext() {
        return !this.elements.isEmpty()
    }
}
