/**
 * @param {number[][]} grid
 * @return {number}
 */
class TrieNode {
    constructor() {
        this.childnode = new Map()
        this.count = 0
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(arr) {
        let currentNode = this.root
        for (let a of arr) {
            if (!currentNode.childnode.has(a)) {
                currentNode.childnode.set(a, new TrieNode())
            }
            currentNode = currentNode.childnode.get(a)
        }
        currentNode.count++
    }
    search(arr) {
        let currNode = this.root
        for (let a of arr) {
            if(currNode.childnode.has(a)) {
                currNode = currNode.childnode.get(a)
            } else {
                return 0
            }
        }
        return currNode.count
    }
};
var equalPairs = function (grid) {
    const n = grid.length
    let myTrie = new Trie()
    for (let row of grid) {
        myTrie.insert(row)
    }
    let count = 0
    for (let c = 0; c < n; c++) {
        const colArr = Array(n)
        for (let r = 0; r < n; r++) {
            colArr[r] = grid[r][c]
        }
        count += myTrie.search(colArr)
    }
    return count
};
