var reverseBetween = function (head, m, n) {
    if (head === null) return null
    let curr = head, prev = null
    while (m > 1) {
        prev = curr
        curr = curr.next
        m--, n--
    }
    let con = prev, tail = curr
    let third = null
    while (n > 0) {
        third = curr.next
        curr.next = prev
        prev = curr
        curr = third
        n--
    }
    if (con !== null) con.next = prev
    else head = prev
    tail.next = curr
    return head
};
