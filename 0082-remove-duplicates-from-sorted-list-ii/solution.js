/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let sentinel = new ListNode(101, head)
    let pred = sentinel
    while (head !== null) {
        if (head.next !== null && head.val === head.next.val) {
            while (head.next !== null && head.val === head.next.val) {
                head = head.next
            }
            pred.next = head.next
        } else {
            pred = pred.next
        }
        head = head.next
    }
    return sentinel.next
};
