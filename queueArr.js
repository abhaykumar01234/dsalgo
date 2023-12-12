class QueueArr {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue(element) {
    return this.items.shift(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new QueueArr();
console.log(queue.isEmpty());
[10, 20, 30].forEach((val) => queue.enqueue(val));
queue.print();
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
queue.print();
