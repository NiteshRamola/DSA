class TimeLimitedCache {
    private values: Object;
    constructor() {
        this.values = {}
    }
    
    set(key: number, value: number, duration: number): boolean {
        let exists = false;
        if(this.values[key]){
            exists = true;
            clearTimeout(this.values[key]?.timer)
        }

        let timer = setTimeout(() => {
            delete this.values[key];
        }, duration);

        this.values[key] = {value, timer}

        return exists;
    }
    
    get(key: number): number {
        return this.values[key]?.value || -1;
    }
    
    count(): number {
        return Object.keys(this.values)?.length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */