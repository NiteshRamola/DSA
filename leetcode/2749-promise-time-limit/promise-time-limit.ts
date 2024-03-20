type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t);

            try{
                const result = await fn(...args);
                clearTimeout(timer);
                resolve(result);
            }catch(err){
                clearTimeout(timer);
                reject(err);
            }

        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */