class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items.length > 0 ? this.items[0] : undefined;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items);
  }
}

const myQueue = new Queue<number>();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Front of the queue:", myQueue.front());
console.log("Is the queue empty?", myQueue.isEmpty());
console.log("Queue size:", myQueue.size());

myQueue.dequeue();
console.log("After dequeue, front of the queue:", myQueue.front());
myQueue.print();
