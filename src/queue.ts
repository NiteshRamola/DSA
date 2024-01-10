// class Queue<T> {
//   private items: T[];

//   constructor() {
//     this.items = [];
//   }

//   enqueue(item: T): void {
//     this.items.push(item);
//   }

//   dequeue(): T | undefined {
//     return this.items.shift();
//   }

//   front(): T | undefined {
//     return this.items.length > 0 ? this.items[0] : undefined;
//   }

//   isEmpty(): boolean {
//     return this.items.length === 0;
//   }

//   size(): number {
//     return this.items.length;
//   }

//   print(): void {
//     console.log(this.items);
//   }
// }

// const myQueue = new Queue<number>();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

// console.log("Front of the queue:", myQueue.front());
// console.log("Is the queue empty?", myQueue.isEmpty());
// console.log("Queue size:", myQueue.size());

// myQueue.dequeue();
// console.log("After dequeue, front of the queue:", myQueue.front());
// myQueue.print();

class Queue<T> {
  private items: { [key: number]: T } = {};
  private frontIndex: number = 0;
  private rearIndex: number = -1;

  enqueue(item: T): void {
    this.rearIndex++;
    this.items[this.rearIndex] = item;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const frontItem = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;

    return frontItem;
  }

  front(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.frontIndex];
  }

  isEmpty(): boolean {
    return this.frontIndex > this.rearIndex;
  }

  size(): number {
    return this.rearIndex - this.frontIndex + 1;
  }

  print(): void {
    console.log(this.items);
  }
}

const myQueue = new Queue<number>();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.print();

console.log(myQueue.dequeue());
console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
