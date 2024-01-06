/**
 * @param {number[]} nums
 * @return {number}
 */
let MAXN = 100001
let help = new Array(MAXN)
function counts(arr, l, r) {
    if (l == r) {
        return 0
    }
    let m = l + ((r - l) >> 1)
    return counts(arr, l, m) + counts(arr, m + 1, r) + merge(arr, l, m, r)
}
function merge(arr, l, m, r) {
    let ans = 0
    for (let j = l, i = m + 1, sum = 0; j <= m; j++) {
        while (arr[j] > 2 * arr[i] && i <= r) {
            sum++
            i++
        }
        ans += sum
    }
    let i = l, a = l, b = m + 1
    while (a <= m && b <= r) {
        help[i++] = arr[a] < arr[b] ? arr[a++] : arr[b++]
    }
    while (a <= m) {
        help[i++] = arr[a++]
    }
    while (b <= r) {
        help[i++] = arr[b++]
    }
    for (i = l; i <= r; i++) {
        arr[i] = help[i]
    }
    return ans
}
var reversePairs = function (nums) {
    return counts(nums, 0, nums.length - 1)
};