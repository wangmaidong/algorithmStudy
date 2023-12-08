function NodeList(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function PartitionList(head, next) {
    let leftHead = leftTail = rightHead = rightTail = null, next
    while (head) {
        next = head.next
        head.next = null
        if (head.val < x) {
            if(leftHead == null) {
                leftHead = head
            } else {
                leftTail.next = head
            }
            leftTail = head
        } else {
            if(rightHead == null) {
                rightHead = head
            } else {
                rightTail.next = head
            }
            rightTail = head
        }
        head = next
    }
    if(leftHead == null) {
        return rightHead
    }
    leftTail.next = rightHead
    return leftHead
}