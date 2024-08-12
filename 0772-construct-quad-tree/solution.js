/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,tL,tR,bL,bR) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.tL = tL;
 *    this.tR = tR;
 *    this.bL = bL;
 *    this.bR = bR;
 * };
 */
var construct = function (grid) {
    const n = grid.length
    const generateNode = (r = 0, c = 0, length = n) => {
        if (length === 1) {
            return new _Node(grid[r][c], true)
        }
        const half = length >> 1
        const rMid = r + half, cMid = c + half
        const tLeft = generateNode(r, c, half)
        const tRight = generateNode(r, cMid, half)
        const bLeft = generateNode(rMid, c, half)
        const bRight = generateNode(rMid, cMid, half)
        if (tLeft.isLeaf && tRight.isLeaf && bLeft.isLeaf && bRight.isLeaf && tLeft.val == tRight.val && tRight.val === bLeft.val && bLeft.val === bRight.val) {
            return new _Node(tLeft.val, true)
        }
        return new _Node(false, false, tLeft, tRight, bLeft, bRight)
    }
    return generateNode()
};
