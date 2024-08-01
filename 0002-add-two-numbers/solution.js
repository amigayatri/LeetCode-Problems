/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const val = (node) => node == null ? 0 : node.val
    const addNodes = (node1, node2, resPrev, hasOverflow = false) => {
        if (node1 == null && node2 == null) {
            if (hasOverflow) resPrev.next = new ListNode(1, null)
            return resPrev
        }
        const sum = val(node1) + val(node2) + (hasOverflow ? 1 : 0)
        const d = sum % 10
        const overflow = sum > 9
        resPrev.next = new ListNode(d, null)
        if (node1 == null) addNodes(null, node2.next, resPrev.next, overflow)
        else if (node2 == null) addNodes(node1.next, null, resPrev.next, overflow)
        else addNodes(node1.next, node2.next, resPrev.next, overflow)
        return resPrev
    }
    const resHead = new ListNode(-1, null)
    addNodes(l1, l2, resHead)
    return resHead.next
};
