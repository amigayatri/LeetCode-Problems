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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const res = Array(k).fill(null)
    let auxPtr = head, size = 0
    while (auxPtr != null) {
        size++
        auxPtr = auxPtr.next
    }
    const partSize = Math.trunc(size/k), remainder = size%k
    auxPtr = head
    let prevPtr = new ListNode()
    for (let i = 0; i < k; i++) {
        let idxSize = partSize
        if (i < remainder) idxSize++
        res[i] = auxPtr
        for(let j = 0; j < idxSize; j++) {
            prevPtr = auxPtr
            auxPtr = auxPtr.next
        }
        prevPtr.next = null
    }
    return res
};
