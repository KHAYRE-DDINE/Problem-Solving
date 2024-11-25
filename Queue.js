
class Queue {
    constructor(data, head, tail) {
        this.data = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(val) {
        // if (this.isFull()) return
        this.data[this.tail] = val
        this.tail++
    }

    dequeue() {
        if (this.isEmpty()) return
        let deleteItem = this.data[this.head]
        delete this.data[this.head]
        this.head++

        return deleteItem
    }

    peek() {
        return this.data[this.head]
    }

    size() {
        return this.tail - this.head
    }

    isEmpty() {
        return this.size() === 0
    }

    print() {
        for (let item in this.data) {
            return this.data[item]
        }
    }
}

const firstQueue = new Queue()

firstQueue.enqueue(20)
firstQueue.enqueue(60)
console.log(firstQueue.peek())
firstQueue.enqueue(40)
console.log(firstQueue)
firstQueue.dequeue()
firstQueue.dequeue()
console.log(firstQueue)
firstQueue.dequeue()
console.log(firstQueue)
console.log(firstQueue.isEmpty())