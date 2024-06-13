var isValidBST = function(root, low = null, high = null) {
    if (!root) return true
    if ((low != null && root.val <= low) || (high != null && root.val >= high)) return false
    return (isValidBST(root.right, root.val, high) && isValidBST(root.left, low, root.val))
};
