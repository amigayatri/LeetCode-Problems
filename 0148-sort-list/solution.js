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
 const getMid = (head) => {
        let midPrev = null
        while (head && head.next) {
            midPrev = midPrev === null? head : midPrev.next
            head = head.next.next
        }
        let mid = midPrev.next
        midPrev.next = null
        return mid
    }

    const merge = (list1, list2) => {
        let dummyHead = new ListNode()
        let tail = dummyHead
        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        tail.next = list1 ? list1 : list2
        return dummyHead.next
    }
var sortList = function (head) {
    if (!head || !head.next) return head
    let mid = getMid(head)
    let left = sortList(head)
    let right = sortList(mid)
    return merge(left, right)
};
