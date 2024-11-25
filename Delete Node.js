// class listNode {
//     constructor(val = null, next = null) {
//         this.val = val;
//         this.next = next
//     }
// }

const deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
}

