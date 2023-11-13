// 交换数组中两个变量的方法
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 选择排序
// 数组长度为 n
// 每次循环从索引 i ~ n-1 中寻找最小值对应的索引minIndex，然后让i 和  minIndex交换位置 
function selectSort(arr) {
  if (arr == null || arr.length == 0) {
    return
  }
  for (let minIndex, i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}
let arr = [5, 4, 3, 1, 2]
selectSort(arr)
console.log(arr)