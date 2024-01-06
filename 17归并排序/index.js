let MAXN = 500
let arr = new Array(MAXN)
let help = new Array(MAXN)
let n 
function MergeSort1(l, r) {
    if (l === r) {
        return
    }
    let m = l + ((r - l) >> 1)
    MergeSort1(l, m)
    MergeSort1(m + 1, r)
    merge(l , m ,r)
}
function merge(l , m ,r) {
    let i = l
    let a = l
    let b = m + 1
    while(a <= m && b <= r) {
        help[l++] = arr[a] <= arr[b] ? arr[a++] : arr[b++]
    }
    while(a <= m) {
        help[l++] = arr[a++]
    }
    while(b <= r) {
        help[l++] = arr[b++]
    }
    for(; i <= r; i++) {
        arr[i] = help[i]
    }
}
// 归并排序非递归版
function MergeSort2() {
    // 通过步长把数组进行拆分，每组个数是步长的数量，然后两两合并
   for(let l, m, r , step = 1; step < arr.length ; step <<= 1 ) {
    l = 0
    while(l < n) {
        // 需要合并的左数组的右边界 等于左边界加步长 - 1
        m = l + step - 1
        // 判断需要合并的右数组的左边界是否超出了数组的长度，超出了则不用合并
        if(m + 1 >= n) {
            break
        }
        // 需要合并的右数组的右边界取两个值的最小值
        r = Math.min((l + (step << 1) - 1), n - 1)
        merge(l , m , r)
        l = r + 1
    }
   }
}
