type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
	let results = [];

    return new Promise((resolve, reject) => {
        for (let i = 0; i < functions.length; i++) {
            (async () => {
                try {
                    const result = await functions[i]();
                    results[i] = result;

                    if (functions.length === results.filter(el => el !== undefined).length) {
                        resolve(results);
                    }
                } catch (err) {
                    reject(err);
                }
            })();
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */