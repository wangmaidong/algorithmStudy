class Stack {
    constructor() {
        this.stack = new Array()
        this.length = 0
    }
    isEmpty() {
        return this.length === 0
    }
    pop() {
        if(this.isEmpty()) return
        return this.stack[--this.length]
    }
    push(val) {
        this.stack[this.length++] = val
    }
    peek() {
        return this.stack[this.length -1]
    }
    size() {
        return this.length
    }
}
// 用栈实现一个队列
class Myqueue {
    constructor() {
        this.in = new Stack()
        this.out = new Stack()
    }
    inToOut() {
        if(this.out.isEmpty()) {
            while(!this.in.isEmpty()) {
                let val = this.in.pop()
                this.out.push(val)
            }
        }
    }
    push(val) {
        this.in.push(val)
        this.inToOut()
    }
    pop() {
        this.inToOut()
        return this.out.pop()
    }
    peek() {
        this.inToOut()
        return this.out.peek()
    }
    empty() {
        return this.in.isEmpty() && this.out.isEmpty()
    }
}

// 用队列实现一个栈

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

class MyStack {
    constructor() {
        this.queue = new MyQueue()
    }
    push(val) {
        // 加之前记录队列的长度
        let n = this.queue.size()
        // 然后再添加
        this.queue.push(val)
        // 添加的项前面有n个项需要移动
        for(let i = 0; i < n ; i++) {
            this.queue.push(this.queue.pop())
        }
    }
    pop() {
       return this.queue.pop()
    }
    top() {
        return this.queue.peek()
    }
    empty() {
        return this.queue.isEmpty()
    }

}
