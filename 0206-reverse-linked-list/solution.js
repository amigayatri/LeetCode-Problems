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
var reverseList = function(head) {
    let ptr = null
    while (head) {
        const auxPtr = head.next
        head.next = ptr
        ptr = head
        head = auxPtr
    }
    return ptr
};
