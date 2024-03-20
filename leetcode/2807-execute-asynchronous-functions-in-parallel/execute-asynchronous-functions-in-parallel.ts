type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const n = functions.length;
    const ans = new Array(n);
    let c = 0;
    return new Promise((reseolve, reject) => {
        for (let i = 0; i < n; i++) {
            functions[i]().then(res => {
                ans[i] = res;
                c++;
                if (c === n) {
                    reseolve(ans);
                } 
            }).catch(e => {
                reject(e);
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */