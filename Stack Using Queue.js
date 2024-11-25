class Queues {
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
        if (this.isEmptys()) return
        let deleteItem = this.data[this.head]
        delete this.data[this.head]
        this.head++

        return deleteItem
    }

    peeks() {
        return this.data[this.head]
    }

    size() {
        return this.tail - this.head
    }

    isEmptys() {
        return this.size() === 0
    }

    print() {
        for (let item in this.data) {
            return this.data[item]
        }
    }
}

class myStack extends Queues {

    push(x) {
        let r = this.size();
        this.enqueue(x);
        if (r > 0) {
            return this.enqueue(this.dequeue());
        }
    }

    pop() {
        return this.dequeue();
    }

    peek() {
        return this.peeks();
    }

    isEmpty() {
        return this.isEmptys();
    }
}





const firstQueue = new myStack()

firstQueue.push(20)
firstQueue.push(60)
console.log(firstQueue.isEmpty())
console.log(firstQueue)
console.log(firstQueue.peek())
firstQueue.push(40)
console.log(firstQueue)
firstQueue.pop()
firstQueue.pop()
console.log(firstQueue)
firstQueue.pop()
console.log(firstQueue)
console.log(firstQueue.isEmpty())