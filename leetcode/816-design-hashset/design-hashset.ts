class MyHashSet {
  private hashSet: {[key: number]: number};
  constructor() {
      this.hashSet = {}
  }

  add(key: number): void {
      this.hashSet[key] = key;
  }

  remove(key: number): void {
      delete this.hashSet[key];
  }

  contains(key: number): boolean {
      return key in this.hashSet;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */