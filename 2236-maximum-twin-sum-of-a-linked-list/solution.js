/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let slow = head, fast = head.next
    let prev = null, nextNode = head.next
    while (fast.next !== null) {
        fast = fast.next.next
        slow.next = prev
        prev = slow
        slow = nextNode
        nextNode = nextNode.next
    }
    let maxSum = 0
    while (nextNode != null) {
        const newSum = slow.val + nextNode.val
        if (newSum > maxSum) maxSum = newSum
        nextNode = nextNode.next
        if (nextNode != null) {
            slow = prev
            let prevTemp = prev
            prev = prev.next
            prevTemp.next = slow
            slow = prevTemp
        }
    }
    return maxSum
};
