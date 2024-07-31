class ZigzagIterator {
    constructor(v1, v2) {
        this.lists = [...arguments]
        this.pointers = Array()
        for (let i in this.lists) {
            if (this.lists[i].length > 0) this.pointers.push({pos: i, i: 0})
        }
    }

    next() {
        if (this.pointers.length == 0) throw new Error('Out of elements!')
        const el = this.pointers.shift()
        const iEl = el.i
        const posEl = el.pos
        const iNextEl = iEl + 1
        if (iNextEl < this.lists[posEl].length) this.pointers.push({pos: posEl, i: iNextEl})
        return this.lists[posEl][iEl]
    }

    hasNext() {
        return this.pointers.length > 0
    }
}
