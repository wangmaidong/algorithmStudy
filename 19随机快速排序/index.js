// 随机快速排序，acm练习风格
// 测试链接 : https://www.nowcoder.com/practice/3385982ae71d4a1ca8bf3d03614c0325
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const MAXN = 10001;
const arr = new Array(MAXN);
let n 
let first, last
// 交换数组任意两项
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 随机快速排序经典版
function QuickSort1(l, r) {
    if (l >= r) {
        return
    }
    // 在 l ~ r 上随机选择一个数
    let x = arr[l + Math.floor(Math.random() * (r - l + 1))]
    let mid = partition1(l, r, x)
    QuickSort1(l, mid - 1)
    QuickSort1(mid + 1, r)
}
function partition1(l, r, x) {
    let a = l, xi = 0;
		for (let i = l; i <= r; i++) {
			if (arr[i] <= x) {
				swap(arr, a, i);
				if (arr[a] == x) {
					xi = a;
				}
				a++;
			}
		}
		swap(arr , xi, a - 1);
		return a - 1;
}
function QuickSort2(l, r) {
    if(l >= r) {
        return
    }
    // 随机选择一个数
    let x = arr[l + Math.floor(Math.random() * (r - l + 1))]
    partition2(l , r , x)
    let left = first
    let right = last
    QuickSort2(l , left - 1)
    QuickSort2(right + 1 , r)
}
function partition2(l , r , x) {
    first = l
    last = r
    let i = l
    while( i <= last ) {
        // 如果小于随机选择的值就让first和x的对应项交换位置，且 first++ , i ++
        if(arr[i] < x) {
            swap(arr, first++, i++)
        } else if(arr[i] == x) {
            i++
        } else {
            swap(arr, i, last--)
        }
    }
}
void (async function () {
    while ((line = await readline())) {
        let tokens1 = line.split(" ")
        
        // 读取到第一行数据了表示有n个数
        n = parseInt(tokens1[0])
        // 读取下一行的数据
        let tokens2 = await readline()
        
        let numbers = tokens2.split(" ").map(Number)
        for (let i = 0; i < n; i++) {
            arr[i] = numbers[i]
        }
        QuickSort2(0, n - 1)
        process.stdout.write(arr[0].toString());
        for (let i = 1; i < n; i++) {
            process.stdout.write(' ' + arr[i]);
        }
        process.stdout.write('\n');
        rl.close();  // 关闭读取流
    }
})()
