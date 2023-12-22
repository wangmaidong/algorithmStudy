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
class TreeNode {
    constructor(v) {
        this.val = v
        this.left = null
        this.right = null
    }
}
let head = new TreeNode(1);
head.left = new TreeNode(2);
head.right = new TreeNode(3);
head.left.left = new TreeNode(4);
head.left.right = new TreeNode(5);
head.right.left = new TreeNode(6);
head.right.right = new TreeNode(7);

function preOrder(head) {
    let stack = new Stack()
    stack.push(head)
    while (!(stack.isEmpty())) {
        head = stack.pop()
        console.log(head.val)
        if (head.right != null) {
            stack.push(head.right)
        }
        if (head.left != null) {
            stack.push(head.left)
        }
    }
}
// preOrder(head)

function inOrder(head) {
    let stack = new Stack()
    while (!stack.isEmpty() || head != null) {
        if (head) {
            stack.push(head)
            head = head.left
        } else {
            head = stack.pop()
            console.log(head.val)
            head = head.right
        }
    }
}

// inOrder(head)
// 双栈实现二叉树的后序遍历
function posOrderByTowStack(head) {
    let stack = new Stack()
    let collection = new Stack()
    stack.push(head)
    while (!stack.isEmpty()) {
        head = stack.pop()
        collection.push(head)
        if (head.left != null) {
            stack.push(head.left)
        }
        if (head.right != null) {
            stack.push(head.right)
        }
    }
    while (!collection.isEmpty()) {
        console.log(collection.pop().val)
    }
}
// 单栈实现二叉树的后序
function posOrderByOneStack(h) {
    if (h != null) {
        let stack = new Stack()
        stack.push(h)
        while (!stack.isEmpty()) {
            // 当前栈顶节点
            cur = stack.peek()
            if (cur.left != null && h != cur.left && h != cur.right) {
                stack.push(cur.left)
            } else if (cur.right != null && h != cur.right) {
                stack.push(cur.right)
            } else {

                h = stack.pop()
                console.log(h.val)
            }
        }
    }
}
posOrderByOneStack(head)