import { Node } from "./llnode"
function LinkedList() {

    return {
        head: null,
        appendNode: function(value) {
            let node = Node(value)
            if (this.head === null) {
                this.head = node;
            } else {
                let tail = this.nodeTail();
                tail.nextNode = node
            }
            
        },
        prepend: function(value) {
    
        },
        size: function() {

        },
        nodeHead: function() {
            return this.head;
        },
        nodeTail: function() {
            let tail = this.head;
            while (tail.nextNode !== null) {
                tail = tail.nextNode
            }
            return tail;
        },
        at: function(index) {

        },
        pop: function() {

        },
        contains: function(value) {

        },
        find: function(value) {

        },
        toString: function() {

        }
    }
}