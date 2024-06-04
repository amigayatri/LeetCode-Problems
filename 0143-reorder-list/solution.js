/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const findMiddleNode = (head) => {
    let slow = head, fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
const reverseList = (head) => {
    let ptr = null
    while (head) {
        const auxPtr = head.next
        head.next = ptr
        ptr = head
        head = auxPtr
    }
    return ptr
};
const mergeTwoLists = (list1, list2) => {
    let first = list1, second = list2
    while(second.next) {
        let tmp = first.next
        first.next = second
        first = tmp

        tmp = second.next
        second.next = first
        second = tmp
    }
    return list1
};
var reorderList = function(head) {
    let middle = findMiddleNode(head)
    middle = reverseList(middle)
    return mergeTwoLists(head, middle)
};
