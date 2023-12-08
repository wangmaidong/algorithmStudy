// 实际刷题时更常见的写法，常数时间好
// 如果可以确定加入操作的总次数不超过n，那么可以用
// 一般笔试、面试都会有一个明确数据量，所以这是最常用的方式

class Queue1 {
    constructor(n) {
        this.queue = new Array(n)
        // 左闭右开 [l, r)
        this.l = 0
        this.r = 0
    }
    isEmpty() {
        return l === r
    }
    // 向队尾添加一项
    offer(val) {
        this.queue[r++] = val
    }
    // 弹出头部的
    poll() {
        if(this.isEmpty()) return
        return this.queue[l++]
    }
    // 返回头部但是不弹出
    peek() {
       return this.queue[l]
    }
    // 返回weibu
    tail() {
        return this.queue[r -1]
    }
    size() {
        return r - l
    }
}