class RandomizedCollection {
    private values: number[];
    private valueToIndex: Map<number, Set<number>>;

    constructor() {
        this.values = [];
        this.valueToIndex = new Map<number, Set<number>>();
    }

    insert(val: number): boolean {
        const indexSet = this.valueToIndex.get(val) || new Set<number>();
        indexSet.add(this.values.length);
        this.valueToIndex.set(val, indexSet);
        this.values.push(val);
        return indexSet.size === 1;
    }

    remove(val: number): boolean {
        if (!this.valueToIndex.has(val)) {
            return false;
        }

        const indexSet = this.valueToIndex.get(val)!;
        const indexToRemove = indexSet.values().next().value;
        indexSet.delete(indexToRemove);

        const lastValue = this.values[this.values.length - 1];
        if (indexToRemove !== this.values.length - 1) {
            this.values[indexToRemove] = lastValue;

            const lastValueIndexSet = this.valueToIndex.get(lastValue)!;
            lastValueIndexSet.delete(this.values.length - 1);
            lastValueIndexSet.add(indexToRemove);
        }

        this.values.pop();

        if (indexSet.size === 0) {
            this.valueToIndex.delete(val);
        }

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */