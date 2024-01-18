/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return randomizedSelect(nums, nums.length - k)
};
function randomizedSelect(nums, i) {
    // 寻找数组中第K大的项，即在有序数组中寻找下标为k的项
    let ans, first, last
    function partition(l, r, x) {
        first = l
        last = r
        let i = l
        while (i <= last) {
            if (nums[i] < x) {
                swap(nums, i++, first++)
            } else if (nums[i] == x) {
                i++
            } else {
                swap(nums, i, last--)
            }
        }
    }
    function swap(arr, i, j) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    for (let l = 0, r = nums.length - 1; l <= r;) {
        let x = nums[l + Math.floor(Math.random() * (r - l + 1))]
        partition(l, r, x)
        if (i < first) {
            r = first - 1
        } else if (i > last) {
            l = last + 1
        } else {
            ans = nums[i]
            break
        }
    }
    return ans
}