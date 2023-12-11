// 实际刷题时更常见的写法，常数时间好
// 如果可以确定加入操作的总次数不超过n，那么可以用
// 一般笔试、面试都会有一个明确数据量，所以这是最常用的方式

class MyQueue {
    constructor() {
        this.queue = new Array()
        // 左闭右开 [l, r)
        this.l = 0
        this.r = 0
    }
    isEmpty() {
        return this.l === this.r
    }
    // 向队尾添加一项
    push(val) {
        this.queue[this.r++] = val
    }
    // 弹出头部的
    pop() {
        if(this.isEmpty()) return
        return this.queue[this.l++]
    }
    // 返回头部但是不弹出
    peek() {
       return this.queue[this.l]
    }
    // 返回weibu
    tail() {
        return this.queue[this.r - this.l]
    }
    size() {
        return this.r - this.l
    }
}