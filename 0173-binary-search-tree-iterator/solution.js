class BSTIterator {
    constructor(root) {
        this.stack = []
        this.#leftmostInorder(root)
    }

    #leftmostInorder = (root) => {
        while (root !== null) {
            this.stack.push(root)
            root = root.left
        }
    } 

    next() {
        const {val, right} = this.stack.pop()
        if (right !== null) {
            this.#leftmostInorder(right)
        }
        return val
    }

    hasNext() {
        return this.stack.length > 0
    }
} 
