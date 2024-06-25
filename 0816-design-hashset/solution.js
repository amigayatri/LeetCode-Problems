class TreeNode {
    constructor (val = undefined, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
class BSTree {
    constructor() {
        this.root = null
    }

    search(val, root = this.root) {
        if (root === null || root.val === val) return root
        if (root.val > val) return this.search(val, root.left)
        else return this.search(val, root.right)
    }

    insert(val, root = this.root) {
        if (root === null) {
            root = new TreeNode(val)
            return root
        }
        if (val > root.val) root.right = this.insert(val, root.right)
        else root.left = this.insert(val, root.left)
        return root
    }
    min = (root) => {
        if (!root.left) return root.val
        return this.min(root.left)
    }

    deleteNode(key, root = this.root) {
        if (root === null) return null
        if (key < root.val) {
            root.left = this.deleteNode(key, root.left)
        } else if (key > root.val) {
            root.right = this.deleteNode(key, root.right)
        } else {
            if (!root.left && !root.right) return null
            if (!root.left) return root.right
            if (!root.right) return root.left
            root.val = this.min(root.right)
            root.right = this.deleteNode(root.val, root.right)
        }
        return root
    }
}

class MyHashSet {
    constructor() {
        this.keyRange = 769
        this.set = []
    }

    _hash(key) {
        return (key % this.keyRange)
    }

    add(key) {
        const index = this._hash(key)
        if (!this.set[index]) this.set[index] = []
        for (let k of this.set[index]) {
            if (k === key) {
                return
            }
        }
        this.set[index].push(key)
    }

    remove(key) {
        const index = this._hash(key)
        if (!this.set[index]) return
        const list = this.set[index]
        let found = false
        for (let i = 0; i < list.length && !found; i++) {
            if (list[i] === key) {
                found = true
                this.set[index][i] = undefined
            }
        }
        if (found && list.length === 1) this.set[index] = false
    }

    contains(key) {
        const index = this._hash(key)
        if (!this.set[index]) return false
        for (let k of this.set[index]) {
            if (k === key) return true
        }
        return false
    }
};
