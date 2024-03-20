class TimeLimitedCache {
    private values: Map<number, {value: number, expiration: ReturnType<typeof setTimeout>}>;
    constructor() {
        this.values = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const exists = this.values.has(key);
        if(exists){
            clearTimeout(this.values.get(key).expiration);
        }

        this.values.set(key, {
            value,
            expiration: setTimeout(() => this.values.delete(key), duration)
        });

        return exists;
    }
    
    get(key: number): number {
        return this.values.has(key) ? this.values.get(key).value : -1;
    }
    
    count(): number {
        return this.values.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */