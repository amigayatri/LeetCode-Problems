/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let st = []
    let parent = new Map()
    parent.set(root, null)
    st.push(root)
    while (!parent.has(p) || !parent.has(q)) {
        let node = st.pop()
        if (node.left != null) {
            parent.set(node.left, node)
            st.push(node.left)
        }
        if (node.right != null) {
            parent.set(node.right, node)
            st.push(node.right)
        }
    }
    let ancestor = new Set()
    while (p != null) {
        ancestor.add(p)
        p = parent.get(p)
    }
    while (!ancestor.has(q)) {
        q = parent.get(q)
    }
    return q
};
