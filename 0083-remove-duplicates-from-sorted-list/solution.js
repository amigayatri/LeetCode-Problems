var deleteDuplicates = function (head) {
    if (head === null) return null
    let aux = head
    while (aux !== null && aux.next !== null) {
        if (aux.val === aux.next.val) {
            aux.next = aux.next.next
        } else {
            aux = aux.next
        }
    }
    return head
};
