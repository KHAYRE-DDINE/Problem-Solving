// class listNode {
//     constructor(val = null, next = null) {
//         this.val = val;
//         this.next = next
//     }
// }


const reverseList = function (head) {
    let prev = null;
    let curr = head;
    let next;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return console.log(prev);

}

reverseList([2, 3, 6, 8])