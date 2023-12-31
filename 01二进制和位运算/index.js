// -72的二进制怎么表示
// 先得到 72的二进制
// 0000 0000 0000 0000 0000 0000 0100 1000
// 取反
// 1111 1111 1111 1111 1111 1111 1011 0111
//                                     加1
// 1111 1111 1111 1111 1111 1111 1011 1000
// 1111 1111 1111 1111 1111 1111 1011 1000


// 将一个10进制的数用32位的二进制表示出来的方法
// 32位 第32位是符号位 正数 0开头 负数 1开头
function printBinary(num) {
  let printNum = ''
  for (let i = 31; i >= 0; i--) {
    // 一个数字 运算与 上 1的位移运算 0000 0000 0000 0000 0000 0000 0000 0001
    // 要么得到一个等于0的数 要么是一个非零的数
    // 等于0那么该位就是 0 ，不等于0该位就是1
    printNum += (num & (1 << i)) == 0 ? '0' : '1'
  }
  console.log(printNum)
}