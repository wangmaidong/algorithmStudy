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
// 二叉树的先序遍历  中 左 右
function preOrder(head) {
    if(head == null) {
        return
    }
    console.log(head.val)
    preOrder(head.left)
    // 2
    preOrder(head.right)
    // 3
}
// 二叉树 中序遍历 左 中 右
function inOrder(head) {
    if(head == null) {
        return
    }
    inOrder(head.left)
    console.log(head.val)
    inOrder(head.right)
}
// 二叉树 后序遍历 左 右 中
function posOrder(head) {
    if(head == null) {
        return
    }
    posOrder(head.left)
    posOrder(head.right)
    console.log(head.val)
}
preOrder(head)
console.log('--------------------')
inOrder(head)
console.log('--------------------')
posOrder(head)