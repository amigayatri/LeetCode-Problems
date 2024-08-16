/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
    constructor() {
        this.childnode = new Map()
        this.wordEnd = false
        this.word = null
    }

    isLeaf () {
        return this.childnode.size == 0
    }

    getChild (c) {
        if (!this.childnode.has(c)) return null
        return this.childnode.get(c)
    }

    delChild (c) {
        this.childnode.delete(c)
    }
    
    setAndGetChild (c) {
        if (!this.childnode.has(c)) {
            this.childnode.set(c, new TrieNode())
        }
        return this.childnode.get(c)
    }

    setEnd (word) {
        this.word = word
        this.wordEnd = true
    }

    getWord () {
        return this.word 
    } 

    deleteWord () {
        if (!this.wordEnd) return
        this.word = null
        this.wordEnd = false
    }
}
class WordDictionary {
    constructor(words = []) {
        this.root = new TrieNode()
        this.initialize(words)
    }

    initialize(words) {
        for (let word of words) {
            this.addWord(word)
        }
    }

    addWord(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const c = word.charAt(i)
            currentNode = currentNode.setAndGetChild(c)
        }
        currentNode.setEnd(word)
    }

    #findPrefixOrWord(prefix) {
        let currentNode = this.root
        for (let c of prefix) {
            currentNode = currentNode.getChild(c)
            if (currentNode == null) break
        }
        return currentNode
    }

    getPrefixNode (prefix) {
        return this.#findPrefixOrWord(prefix)
    }

    startsWith(prefix) {
        let lastNode = this.#findPrefixOrWord(prefix)
        if (lastNode == null) return false
        return true
    }

    search(word) {
        let lastNode = this.#findPrefixOrWord(word)
        if (lastNode == null) return false
        return lastNode.word
    }
};
var findWords = function (board, words) {
    const dict = new WordDictionary(words)
    const m = board.length, n = board[0].length
    const directions = [
        [0, 1],
        [1, 0], 
        [0, -1],
        [-1, 0],
    ]
    const res = []
    const backtracking = (row, col, parent = dict.root) => {
        const c = board[row][col]
        const node = parent.getChild(c)
        const word = node.getWord()
        if (word !== null) {
            res.push(node.word)
            node.deleteWord()
        }
        board[row][col] = '#'
        for (let [rOff, cOff] of directions) {
            const rNew = row+rOff
            const cNew = col+cOff
            if (rNew < 0 || rNew >= m || cNew < 0 || cNew >= n) {
                continue
            }
            const newChar = board[rNew][cNew]
            if (node.getChild(newChar) !== null) {
                backtracking(rNew, cNew, node)
            }
        }
        board[row][col] = c
        if (node.isLeaf()) parent.delChild(c)
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if(dict.root.getChild(board[r][c]) !== null) {
                backtracking(r, c)
            }
        }
    }
    return res
};
