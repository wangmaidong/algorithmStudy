class Stack {
    constructor() {
        this.stack = new Array()
        this.length = 0
    }
    isEmpty() {
        return this.length === 0
    }
    pop() {
        return this.stack[--this.length]
    }
    push(val) {
        this.stack[this.length++] = val
    }
    peek() {
        return this.stack[this.length - 1]
    }
    size() {
        return this.length
    }
}
class MinStack {
    constructor() {
        this.data = new Stack()
        this.min = new Stack()
    }
    push(val) {
        this.data.push(val)
        if (this.min.isEmpty() || val < this.min.peek()) {
            this.min.push(val)
        } else {
            this.min.push(this.min.peek())
        }
    }
    pop() {
        this.min.pop()
        return this.data.pop()
    }
    top() {
        return this.data.peek()
    }
    getMin() {
        return this.min.peek()
    }
}