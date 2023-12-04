function mergeTwoList(list1, list2) {
    // 如果两个链表有一个为空那么就返回另一个
    if(list1 == null || list2 == null) {
        return  list1 ? list1 : list2
    }
    let head = list1.val <= list2.val ? list1 : list2
    let cur1 = head.next
    let cur2 = head == list1 ? list2 : list1
    let pre = head
    while(cur1 != null && cur2 != null) {
        if(cur1.val <= cur2.val) {
            pre.next = cur1
            cur1 = cur1.next
        } else {
            pre.next = cur2
            cur2 = cur2.next
        }
        pre = pre.next
    }
    pre.next = cur1 != null ? cur1 : cur2
    return head
}