// Queue Using Stack
class myQueue {
    constructor(stackOne, stackTwo) {
        this.stackOne = [];
        this.stackTwo = []
    }

    push(ele) {
        this.stackOne.push(ele)
    }

    pop() {
        if (!this.stackTwo.length) {
            while (this.stackOne.length) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        return this.stackTwo.pop();
    }

    peek() {
        if (!this.stackTwo.length) {
            while (this.stackOne.length) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        return this.stackTwo[this.stackTwo.length - 1]
    }

    isEmpty() {
        return !this.stackOne.length && !this.stackTwo.length
    }
}

const queue = new myQueue()


console.log(queue.isEmpty())
queue.push(10)
queue.push(30)
console.log(queue)
queue.pop()
console.log(queue)
console.log(queue.isEmpty())
queue.peek()
console.log(queue.peek())
console.log(queue.isEmpty())