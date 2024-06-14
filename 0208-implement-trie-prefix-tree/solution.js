class TrieNode {
    constructor () {
        this.childnode = Array(26).fill(null)
        this.wordEnd = false
    }
}
class Trie {
    constructor () {
        this.root = new TrieNode()
    }

    insert(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if(currentNode.childnode[index] === null) {
                currentNode.childnode[index] = new TrieNode()
            }
            currentNode = currentNode.childnode[index]
        }
        currentNode.wordEnd = true
    }

    search(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if(currentNode.childnode[index] === null) {
                return false
            }
            currentNode = currentNode.childnode[index]
        }
        return currentNode.wordEnd
    }

    startsWith(prefix) {
        let currentNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            const index = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
            if(currentNode.childnode[index] === null) {
                return false
            }
            currentNode = currentNode.childnode[index]
        }
        return true
    }
};
