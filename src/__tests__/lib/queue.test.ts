import { Queue } from '../../../src/lib/queue';

describe('queue', () => {
  test('Queue 초기값', () => {
    const queue = new Queue();

    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  test('queue.enqueue 동작 테스트', () => {
    const queue = new Queue();
    const data1 = { foo: 'bar' },
      data2 = { foo1: 'bar1' };

    queue.enqueue(data1);
    expect(queue.head.data).toEqual(data1);

    queue.enqueue(data2);
    expect(queue.head.data).toEqual(data1);
    expect(queue.tail.data).toEqual(data2);
  });

  test('queue.dequeue 동작 테스트. node 없음', () => {
    const queue = new Queue();

    const dequeued = queue.dequeue();
    expect(dequeued).toEqual(null);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  test('queue.dequeue 동작 테스트. node 한 개', () => {
    const queue = new Queue();
    const data1 = { foo: 'bar' };

    queue.enqueue(data1);

    const dequeued = queue.dequeue();
    expect(dequeued).toEqual(data1);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });

  test('queue.dequeue 동작 테스트. node 둘 이상', () => {
    const queue = new Queue();
    const data1 = { foo: 'bar' },
      data2 = { foo1: 'bar1' };

    queue.enqueue(data1);
    queue.enqueue(data2);

    const dequeued1 = queue.dequeue();
    expect(dequeued1).toEqual(data1);
    expect(queue.head).toBe(queue.tail);
  });
});
