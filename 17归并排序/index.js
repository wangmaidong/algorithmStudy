let MAXN = 500
let arr = new Array(MAXN)
let help = new Array(MAXN)
function MergeSort(l = 0, r = arr.length - 1) {
    if (l === r) {
        return
    }
    let m = l + ((r - l) >> 1)
    MergeSort(l, m)
    MergeSort(m + 1, r)
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