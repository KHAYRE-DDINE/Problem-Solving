class listNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next
    }
}


const removeDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next;
        }
    }
    return head
}


console.log(removeDuplicates([1, 1, 2]))