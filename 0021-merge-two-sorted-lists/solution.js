/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prehead = new ListNode(-1), prevPtr = prehead
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            prevPtr.next = list1
            list1 = list1.next
        } else {
            prevPtr.next = list2
            list2 = list2.next
        }
        prevPtr = prevPtr.next
    }
    if (list1 != null) {
        prevPtr.next = list1
    } else {
        prevPtr.next = list2
    }
    return prehead.next
};
