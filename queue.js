class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear++] = element;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

export default Queue;

const queue = new Queue();
console.log(queue.isEmpty());
[10, 20, 30].forEach((val) => queue.enqueue(val));
queue.print();
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
queue.print();
