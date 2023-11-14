// 交换数组中两个变量的方法
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 选择排序
// 数组长度为 n
// 每次循环从索引 i ~ n-1 中寻找最小值对应的索引minIndex，然后让i 和  minIndex交换位置 
// 每次都会把最小值排到第i位
function selectSort(arr) {
  if (arr == null || arr.length < 2) {
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

// 冒泡排序
function bubbleSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}
// 插入排序
function insertionSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
}
let arr = [5, 3, 4, 1, 2, 8, -3]
// selectSort(arr)
// 5  4,3,1,2
// 4,5  3,1,2
insertionSort(arr)
console.log(arr)