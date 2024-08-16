/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const merge2Lists = (l1, l2) => {

        return headSentinel.next
    }
    let amount = lists.length
    let interval = 1
    while (interval < amount) {
        for (let i = 0; i < amount - interval; i += interval * 2) {
            let l1 = lists[i], l2 = lists[i + interval]
            let headSentinel = new ListNode(-1)
            let ptr = headSentinel
            while (l1 !== null && l2 !== null) {
                if (l1.val <= l2.val) {
                    ptr.next = l1
                    l1 = l1.next
                } else {
                    ptr.next = l2
                    l2 = l1
                    l1 = ptr.next.next
                }
                ptr = ptr.next
            }
            if (l1 == null) {
                ptr.next = l2
            } else {
                ptr.next = l1
            }
            lists[i] = headSentinel.next
        }
        interval *= 2
    }
    return amount > 0 ? lists[0] : null
};
