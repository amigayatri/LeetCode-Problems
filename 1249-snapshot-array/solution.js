const reverseIterator = function () {
    const keys = Array.from(this.keys());
    let index = keys.length;
    return {
        next: function () {
            return {
                done: index === 0,
                value: keys[--index]
            };
        }
    }
};

class SnapshotArray {
    constructor(length) {
        this.counter = 0
        this.snapshots = new Map()
        this.updatedIdx = new Map()
    }

    set(index, val) {
        this.updatedIdx.set(index, val)
    }

    snap() {
        for (let [idx, val] of this.updatedIdx) {
            let idxMap
            if (this.snapshots.has(idx)) idxMap = this.snapshots.get(idx)
            else idxMap = new Map()
            idxMap.set(this.counter, val)
            this.snapshots.set(idx, idxMap)
        }
        this.updatedIdx.clear()
        this.counter++
        return this.counter - 1
    }

    get(index, snap_id) {
        let toTry = this.snapshots.get(index)
        if (toTry == undefined) return 0
        toTry[Symbol.iterator] = reverseIterator
        for (let id of toTry) {
            if (id <= snap_id) return toTry.get(id)
        }
        return 0
    }
}
