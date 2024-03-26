class RandomizedSet {
    private map: Map<number, number>;
    private arr: number[];
    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        const isExists = !this.map.has(val);
        if(isExists){
            this.arr.push(val);
            this.map.set(val, this.arr.length -1);
        }

        return isExists;
    }

    remove(val: number): boolean {
        const isExists = this.map.has(val);
        if(isExists){
            const value = this.map.get(val);
            const lastValue = this.arr[this.arr.length - 1];

            this.map.set(lastValue, value);
            this.arr[value] = lastValue;
            this.arr.length = this.arr.length - 1;

            this.map.delete(val);
        }

        return isExists;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex]; 
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */