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
    let ptr = l1
    let firstStack = [], secondStack = []
    while (ptr !== null) {
        firstStack.push(ptr)
        ptr = ptr.next
    }
    ptr = l2
    while (ptr !== null) {
        secondStack.push(ptr)
        ptr = ptr.next
    }
    let res = null, overflow = 0
    while (firstStack.length > 0 || secondStack.length > 0) {
        const first = firstStack.pop()
        const second = secondStack.pop()
        const firstVal = first != undefined ? first.val : 0
        const secondVal = second != undefined ? second.val : 0
        let sum = firstVal + secondVal + overflow
        overflow = (sum > 9) ? 1 : 0
        sum -= (10*overflow)
        res = new ListNode(sum, res)
    }
    if (overflow != 0) res = new ListNode(1, res)
    return res
};
