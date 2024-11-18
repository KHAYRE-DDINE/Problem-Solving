class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(ele) {
        if (!this.stack.length) {
            this.stack.push(ele)
        } else {
            let min = Math.min(ele, this.stack[this.stack.length - 1])
            this.minStack.push(parseInt(min))
        }
        this.stack.push(ele)
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const test = new MinStack()

test.push(4)
test.push(2)
test.push(5)
test.push(4)
test.push(0)
test.push(9)


console.log(test)

test.pop()

console.log(test)

test.top()

console.log(test.stack)
console.log(test.minStack)
console.log(test.getMin())
console.log(test.top())

test.push(92)

console.log(test.top())