class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    addLast(data) {
        let current = this.head
        let node = new Node(data)
        if (!current) {
            this.head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
    }

    addAtIndex(data, index) {
        if (index < 0 && index > this.size) return;
        if (index === 0) { return this.addFirst(data) }

        const node = new Node(data)
        let prev,
            current = this.head,
            count = 0;

        while (count < index) {
            prev = current;
            count++;
            current = current.next;
        }
        prev.next = node;
        node.next = current;
        this.size++
    }

    getAllData() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }


}

const li = new linkedList()

li.addFirst(30)
li.addLast(765)
li.addLast(95)
li.addLast(76)
li.addAtIndex(6, 0)
li.addAtIndex(10, 3)
li.getAllData()
console.log(li)