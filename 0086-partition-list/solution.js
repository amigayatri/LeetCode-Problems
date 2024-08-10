/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallerSentinel = new ListNode(101)
    let biggerSentinel = new ListNode(101)
    let smaller = smallerSentinel
    let bigger = biggerSentinel
    while (head) {
        if (head.val < x) {
            smaller.next = head
            smaller = smaller.next
        } else {
            bigger.next = head
            bigger = bigger.next
        }
        head = head.next
    }
    smaller.next = biggerSentinel.next
    bigger.next = null
    return smallerSentinel.next
};
