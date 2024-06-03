
function randomArray(n, v) {
    let arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(Math.random() * v + 1)
    }
    return arr
}
function sameArray(arr1, arr2) {
    let n = arr1.length
    for (let i = 0; i < n; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        }
    }
    return true
}
function copyArray(arr) {
    let n = arr.length
    let copyArr = new Array(n)
    for (let i = 0; i < n; i++) {
        copyArr[i] = arr[i]
    }
    return copyArr
}
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
//选择排序
function selectSort(arr) {
    if (arr === null || arr.length < 2) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        let maxMinIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxMinIndex]) {
                maxMinIndex = j
            }
        }
        swap(arr, i, maxMinIndex)
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
function validator() {
    // 随机数组的最大长度
    let N = 200
    // 随机数组的每个值，等概率在 1~v
    let v = 1000
    let testTimes = 10000
    console.log('测试开始')
    for (let i = 0; i < testTimes; i++) {
        let n = parseInt(Math.random() * N + 2)
        // 随机产生一个数组
        let arr = randomArray(n, v)
        let arr1 = copyArray(arr)
        let arr2 = copyArray(arr)
        let arr3 = copyArray(arr) 
        selectSort(arr1)
        bubbleSort(arr2)
        insertionSort(arr3)
        if(!sameArray(arr1, arr2) || !sameArray(arr1, arr3)) {
            console.log(arr1)
            console.log(arr2)
            console.log(arr3)
            console.log('测试错误')
            break
        }
    }
    console.log('测试结束')
}
validator()