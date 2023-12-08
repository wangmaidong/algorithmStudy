class NodeList {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    // isEmpty 
    isEmpty() {
        return this.size === 0
    }
    // offer 向尾巴加入一个节点
    offer(val) {
        let nodelist = new NodeList(val, null)
        if(this.head == null ) {
            this.head = nodelist
        } else {
            this.tail.next = nodelist
        }
        this.tail = nodelist
        this.size++
    }
    // poll 从头拿出一个节点
    poll() {
        let head = this.head
        let next = head.next
        this.head = next
        this.size--
        return head
    }
    // peek 返回队列头的元素但是不弹出
    peek() {
        return this.head
    }
}

class Queue1 {
    constructor() {
        this.queue = new LinkedList()
    }
    isEmpty() {
        return this.queue.isEmpty()
    }
    offer(num) {
        this.queue.offer(num)
    }
    poll() {
        return this.queue.poll()
    }
    peek() {
       return this.queue.peek()
    }
    size() {
        return this.queue.size
    }
}

let queue1 = new Queue1()
console.log(queue1.isEmpty())
queue1.offer(1)
console.log(queue1.peek())
queue1.offer(2)
console.log(queue1.size())
console.log(queue1.poll())
console.log(queue1.size())