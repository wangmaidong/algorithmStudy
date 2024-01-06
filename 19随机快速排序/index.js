const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const MAXN = 10001;
const arr = new Array(MAXN);
let n 
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
        QuickSort1(0, n - 1)
        process.stdout.write(arr[0].toString());
        for (let i = 1; i < n; i++) {
            process.stdout.write(' ' + arr[i]);
        }
        process.stdout.write('\n');
        rl.close();  // 关闭读取流
    }
})()
