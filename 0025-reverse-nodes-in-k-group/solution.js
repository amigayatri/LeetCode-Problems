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
var reverseKGroup = function (head, k) {
    const reverseLinkedList = (start) => {
        let newHead = null
        let ptr = start
        for (let c = 0; c < k; c++) {
            const next = ptr.next
            ptr.next = newHead
            newHead = ptr
            ptr = next
        }
        return newHead
    }
    let ptr = head, kTail = null, newHead = null
    while (ptr != null) {
        let c
        ptr = head
        for (c = 0; c < k; c++) {
            if (ptr == null) break
            ptr = ptr.next
        }
        if (c == k) {
            const revHead = reverseLinkedList(head)
            if (newHead == null) {
                newHead = revHead
            }
            if (kTail !== null) {
                kTail.next = revHead
            }
            kTail = head
            head = ptr
        }
    }
    if (kTail !== null) {
        kTail.next = head
    }
    return newHead == null ? head : newHead
};
