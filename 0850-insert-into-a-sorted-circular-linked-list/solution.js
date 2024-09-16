const insert = function (head, insertVal) {
    if (head === null) {
        const newNode = new _Node(insertVal, null)
        newNode.next = newNode
        return newNode
    }
    let prev = head, curr = head.next, toInsert = false
    do {
        if (prev.val <= insertVal && insertVal <= curr.val) {
            toInsert = true
        } else if (prev.val > curr.val) {
            if (insertVal >= prev.val || insertVal <= curr.val) {
                toInsert = true
            }
        }
        if (toInsert) {
            prev.next = new _Node(insertVal, curr)
            return head
        }
        prev = curr
        curr = curr.next
    } while (prev != head)
    prev.next = new _Node(insertVal, curr)
    return head
};
