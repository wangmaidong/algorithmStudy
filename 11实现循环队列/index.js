// 设计循环队列
// 测试链接 : https://leetcode.cn/problems/design-circular-queue/
class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k)
        this.l = 0
        this.r = 0
        this.size = 0
        this.k = k
    }
    // 检查队列是否为空
    isEmpty() {
        return this.size === 0
    }
    // 检查队列是否满了
    isFull() {
        return this.size === this.k
    }
    // 向循环队列插入一个元素。如果成功插入则返回真。
    enQueue(value) {
        if(this.isFull()) return false
        this.queue[this.r] = value
        this.r = this.r == (this.k -1) ? 0 : this.r + 1
        this.size++
        return true
    }
    // 从循环队列中删除一个元素。如果成功删除则返回真。
    deQueue() {
        if(this.isEmpty()) return false
        this.l = this.l == (this.k -1) ? 0 : this.l + 1
        this.size--
        return true
    }
    // 从队首获取元素。如果队列为空，返回 -1 。
    Front() {
        if(this.isEmpty()) return -1
        return this.queue[this.l]
    }
    // 获取队尾元素。如果队列为空，返回 -1 。
    Rear() {
        if(this.isEmpty()) return -1
        return this.queue[this.r == 0 ? this.k - 1 : this.r -1]
    }
}