// 小和问题
// 测试链接 : https://www.nowcoder.com/practice/edfe05a1d45c4ea89101d936cac32469
const rl = require("readline").createInterface({
    input: process.stdin
})
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value
const MAXN = 501
const arr = new Array(MAXN)
const help = new Array(MAXN)
let n
function smallSum(l, r) {
    if (l == r) {
        return 0
    }
    let m = l + ((r - l) >> 1)
    return smallSum(l, m) + smallSum(m + 1, r) + merge(l, m, r)
}
function merge(l, m, r) {
    let ans 
    for(let j = m + 1, i = l, sum = 0; j <= r ; j++ ) {
       while(arr[i] <= arr[j] && i <= m) {
            sum += arr[i]
            i++
        }
        ans += sum
    }
    let a = l,
        b = m + 1,
        i = l
    while(a <= m && b <= r) {
        help[i++] = arr[a] <= arr[b] ? arr[a++] : arr[b++]
    }
    while(a <= m ) {
        help[i++] = arr[a++]
    }
    while(b <= r) {
        help[i++] = arr[b++]
    }
    for(i = l; i <= r; i++) {
        arr[i] = help[i]
    }
    return ans
}
void (async function () {
    while (line = await readline()) {
        let tokens1 = line.split(' ')
        n = parseInt(tokens1[0])
        let tokens2 = await readline()
        let numbers = tokens2.split(" ").map(Number)
        for (let i = 0; i < n; i++) {
            arr[i] = numbers[i]
        }
        let ans =  smallSum(0, n - 1)
        console.log(ans)
        rl.close()
    }
})()