/**
 * 
 * @param {*} n 表示数组的长度
 * @param {*} V 表示数组中的每项是1~V中的随机数
 */
function randomArray(n, V) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * V + 1)
  }
  return arr
}
// console.log(randomArray(10, 100).sort((a, b) => a - b))
let arr = [
  15, 19, 26, 39, 44,
  52, 60, 64, 93, 97
]
// 二分查找某个数在数组中是否存在
function exits(arr, num) {
  if (arr == null || arr.length == 0) {
    return
  }
  let l = 0, // 左边界
    r = arr.length - 1, // 右边界
    m = 0 // 中间值
  while (l <= r) {
    m = l + ((r - l) >> 1) // 取 l 和 r 的中间值
    if (arr[m] == num) {
      return true
    } else if (arr[m] > num) { // 如果中间值大于 要查找的num , 说明num在m的左边
      r = m - 1
    } else if (arr[m] < num) { // 如果中间值小于 要查找的num , 说明num在m的右边
      l = m + 1
    }
  }
  return false
}

// 二分查找 有序数组中找>=num的最左位置 26
// 15, 19, 26, 39, 44, 52, 60, 64, 93, 97
// 0   1    2   3   4   5   6   7   8   9
function findLeft(arr, num) {
  if (arr == null || arr.length == 0) {
    return
  }
  debugger
  let l = 0,
    r = arr.length - 1,
    m = 0,
    ans = -1
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (arr[m] >= num) {
      r = m - 1
      ans = m
    } else {
      l = m + 1
    }
  }
  return ans
}
console.log(findLeft(arr, 26))