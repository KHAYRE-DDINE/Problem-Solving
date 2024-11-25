class ListNode {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

const removeElements = (data, val) => {
    let dummy = new ListNode(-1, data)
    let prev = dummy
    let curr = data;

    while (curr) {
        if (curr.data == val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return console.log(dummy.next)
}

removeElements([2, 3, 5, 2, 6, 8], 2)