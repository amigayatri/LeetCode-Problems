class Codec {
  	constructor() {
    }
    
    /** 
     * @param {_Node|null} root
     * @return {TreeNode|null}
     */
    // Encodes an n-ary tree to a binary tree.
    encode = function(root) {
		if (root == null) return null
        const newRoot = new TreeNode(root.val)
        if (root.children.length > 0) {
            const firstChild = this.encode(root.children[0])
            newRoot.left = firstChild
        }
        let sibiling = newRoot.left
        for (let i = 1; i < root.children.length; i++) {
            sibiling.right = this.encode(root.children[i])
            sibiling = sibiling.right
        }
        return newRoot
    };
	
    /** 
     * @param {TreeNode|null} root 
     * @return {_Node|null}
     */
    // Decodes your binary tree to an n-ary tree.
    decode = function(root) {
		if (root == null) {
            return null
        }
        const newRoot = new _Node(root.val, [])
        let sibiling = root.left
        while (sibiling != null) {
            newRoot.children.push(this.decode(sibiling))
            sibiling = sibiling.right
        }
        return newRoot
    };
}
