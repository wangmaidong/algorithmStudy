// 给你两个 非空 的链表，表示两个非负的整数
// 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头
// 测试链接：https://leetcode.cn/problems/add-two-numbers/
function addTwoNumbers(h1, h2) {
    let ans = null, cur = {}, carry = 0
    for (let sum, val, v1, v2;
        h1 != null || h2 != null;
        h1 = h1 == null ? null : h1.next, h2 = h2 != null ? null : h2.next) {
        v1 = h1 == null ? 0 : h1.val
        v2 = h2 == null ? 0 : h2.val
        sum = v1 + v2 + carry
        val = sum % 10
        carry = Math.floor(sum / 10)
        let next = {
            val,
            next: null
        }
        if (!ans) {
            ans = cur = next
        } else {
            cur.next = next
            cur = next
        }
    }
    if(carry) {
        cur.next = {
            val: 1,
            next: null
        }
    }
    return ans
}