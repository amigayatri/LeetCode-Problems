/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || !k) return head
    let n = 1, auxPtr = head
    while (auxPtr.next) {
        auxPtr = auxPtr.next
        n++
    }
    k = n- (k % n)
    auxPtr.next = head
    for (let r = 0; r < k; r++) {
        auxPtr = auxPtr.next
    }
    const newHead = auxPtr.next
    auxPtr.next = null
    return newHead
};
