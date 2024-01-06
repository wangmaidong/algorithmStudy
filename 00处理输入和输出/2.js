const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();

const readline = async () => (await iter.next()).value;

const MAXN = 201;
const MAXM = 201;

let n, m;
let mat;

function maxSumSubmatrix() {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        const arr = new Array(MAXM).fill(0);
        for (let j = i; j < n; j++) {
            for (let k = 0; k < m; k++) {
                arr[k] += mat[j][k];
            }
            max = Math.max(max, maxSumSubarray(arr));
        }
    }
    return max;
}

function maxSumSubarray(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let cur = 0;
    for (let i = 0; i < m; i++) {
        cur += arr[i];
        max = Math.max(max, cur);
        cur = cur < 0 ? 0 : cur;
    }
    return max;
}

void (async function () {
    while ((line = await readline())) {
        let tokens = line.split(" ");
        n = parseInt(tokens[0]);
        m = parseInt(tokens[1]);

        mat = new Array(n);
        for (let i = 0; i < n; i++) {
            line = await readline();
            mat[i] = line.split(" ").map(Number);
        }

        console.log(maxSumSubmatrix());
    }
})();
