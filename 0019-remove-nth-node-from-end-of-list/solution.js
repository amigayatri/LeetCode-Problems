/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prehead = new ListNode(-1)
    prehead.next = head
    let first = prehead, second = prehead
    for(let i = 0; i < n+1; i++) {
        first = first.next
    }
    while (first != null) {
        first = first.next
        second = second.next 
    }
    second.next = second.next.next
    return prehead.next
};
