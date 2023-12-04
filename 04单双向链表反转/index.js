// 单向链表的反转
function reverseList(head) {
    let pre = null
    let next = null
    while(head != null ) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
}
// 双向链表的反转
function reverseDubleList(head) {
    let pre = null
    let next = null
    while(head != null) {
        next = head.next
        head.next = pre
        head.last = next
        pre = head
        head = next
    }
    return pre
}