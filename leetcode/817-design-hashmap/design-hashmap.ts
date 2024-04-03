class MyHashMap {
  private hashMap: number[];
  constructor() {
      this.hashMap = [];
  }

  put(key: number, value: number): void {
      this.hashMap[key] = value;
  }

  get(key: number): number {
      return this.hashMap[key] === 0 ? 0 : this.hashMap[key] || -1;
  }

  remove(key: number): void {
      this.hashMap[key] = -1;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */