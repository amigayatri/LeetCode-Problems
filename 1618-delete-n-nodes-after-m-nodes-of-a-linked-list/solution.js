/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
    let currNode = head, lastNode = head
    while (currNode != null) {
        let mCount = m, nCount = n
        while (currNode != null && mCount > 0) {
            lastNode = currNode
            currNode = currNode.next
            mCount--
        }
        while (currNode != null && nCount > 0) {
            currNode = currNode.next
            nCount--
        }
        lastNode.next = currNode
    }
    return head
};
