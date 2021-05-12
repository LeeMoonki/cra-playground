/* eslint-disable @typescript-eslint/no-explicit-any */
export const Queue = (function () {
  class QueueNode {
    constructor(
      public nodeHead: QueueNode | null,
      public data: any,
      public nodeTail: QueueNode | null
    ) {}
  }

  class Queue {
    constructor(public head: QueueNode | null = null, public tail: QueueNode | null = null) {}

    enqueue(data: any) {
      const newNode = new QueueNode(this.tail, data, null);
      if (this.tail === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nodeTail = newNode;
      }
      this.tail = newNode;
    }

    dequeue() {
      if (this.head === null) {
        return null;
      }

      const dequeueNode = this.head;

      this.head = dequeueNode.nodeTail;

      if (this.head === null) {
        this.tail = null;
      }

      return dequeueNode.data;
    }
  }

  return Queue;
})();
