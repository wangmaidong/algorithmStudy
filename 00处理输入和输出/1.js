const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const MAXN = 501;

const arr = new Array(MAXN);
const help = new Array(MAXN);

let n;

function mergeSort1(l, r) {
    if (l < r) {
        const m = Math.floor((l + r) / 2);
        mergeSort1(l, m);
        mergeSort1(m + 1, r);
        merge(l, m, r);
    }
}

function mergeSort2() {
    for (let step = 1; step < n; step <<= 1) {
        for (let l = 0; l < n; l += step << 1) {
            const m = l + step - 1;
            const r = Math.min(l + (step << 1) - 1, n - 1);
            merge(l, m, r);
        }
    }
}

function merge(l, m, r) {
    let i = l;
    let a = l;
    let b = m + 1;
    while (a <= m && b <= r) {
        help[i++] = arr[a] <= arr[b] ? arr[a++] : arr[b++];
    }
    while (a <= m) {
        help[i++] = arr[a++];
    }
    while (b <= r) {
        help[i++] = arr[b++];
    }
    for (i = l; i <= r; i++) {
        arr[i] = help[i];
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
        mergeSort1(0, n - 1)
        process.stdout.write(arr[0].toString());
        for (let i = 1; i < n; i++) {
            process.stdout.write(' ' + arr[i]);
        }
        process.stdout.write('\n');
        rl.close();  // 关闭读取流
    }
})()
