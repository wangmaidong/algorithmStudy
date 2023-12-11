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
        return this.stack[this.length -1]
    }
    size() {
        return this.length
    }
}
let stack = new Stack()
console.log(stack.isEmpty());
stack.push(1)
stack.push(2)
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
