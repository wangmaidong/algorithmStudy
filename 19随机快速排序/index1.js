// 随机快速排序，填函数练习风格
// 测试链接 : https://leetcode.cn/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let first, last
    function QuickSort2(l, r) {
        if (l >= r) {
            return
        }
        // 随机选择一个数
        let x = nums[l + Math.floor(Math.random() * (r - l + 1))]
        partition2(l, r, x)
        let left = first
        let right = last
        QuickSort2(l, left - 1)
        QuickSort2(right + 1, r)
    }
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    function partition2(l, r, x) {
        first = l
        last = r
        let i = l
        while (i <= last) {
            // 如果小于随机选择的值就让first和x的对应项交换位置，且 first++ , i ++
            if (nums[i] < x) {
                swap(nums, first++, i++)
            } else if (nums[i] == x) {
                i++
            } else {
                swap(nums, i, last--)
            }
        }
    }
    QuickSort2(0 , nums.length - 1)
    return nums
};