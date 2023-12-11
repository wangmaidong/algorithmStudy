class MyCircularDeque {
    constructor(limit) {
        this.deque = new Array(limit)
        this.l = this.r = 0
        this.size = 0
        this.limit = limit
    }
    // 将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
    insertFront(val) {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            this.l = this.r = 0
            this.deque[0] = val
        } else {
            this.l = (this.l === 0) ? this.limit - 1 : this.l - 1
            this.deque[this.l] = val
        }
        this.size++
        return true
    }
    // 将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
    insertLast(val) {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            // 空的时候要保证 l 和 r初始为0
            this.l = this.r = 0
            this.deque[0] = val
        } else {
            this.r = (this.r === this.limit - 1) ? 0 : this.r + 1
            this.deque[this.r] = val
        }
        this.size++
        return true
    }
    // 从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
    deleteFront() {
        if (this.isEmpty()) return false
        this.l = (this.l === this.limit - 1) ? 0 : (this.l + 1)
        this.size--
        return true
    }
    // 从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
    deleteLast() {
        if (this.isEmpty()) return false
        this.r = (this.r === 0) ? (this.limit - 1) : (this.r - 1)
        this.size--
        return true
    }
    // 从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
    getFront() {
        if (this.isEmpty()) return -1
        return this.deque[this.l]
    }
    // 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
    getRear() {
        if (this.isEmpty()) return -1
        return this.deque[this.r]
    }
    // 若双端队列为空，则返回 true ，否则返回 false  。
    isEmpty() {
        return this.size === 0
    }
    // 若双端队列满了，则返回 true ，否则返回 false 。
    isFull() {
        return this.size === this.limit
    }
}