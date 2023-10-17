import { Node } from "./llnode"
function LinkedList() {

    return {
        head: null,
        appendNode: function(value) {
            let node = Node(value);
            if (this.head === null) {
                this.head = node;
            } else {
                let tail = this.nodeTail();
                tail.nextNode = node
            }
            
        },
        prependNode: function(value) {
            let node = Node(value);
            if (this.head === null) {
                this.head = node;
            } else {
                let currentHead = this.head;
                this.head = node;
                this.head.nextNode = currentHead
            }
        },
        size: function() {
            let size = 0;
            let current = this.nodeHead();
            while (current !== null) {
                size++;
                current = current.nextNode;
            }
            return size;
        },
        nodeHead: function() {
            return this.head;
        },
        nodeTail: function() {
            let tail = this.nodeHead();
            while (tail.nextNode !== null) {
                tail = tail.nextNode
            }
            return tail;
        },
        at: function(index) {
            if (index > (this.size() - 1)) {
                return null
            } else {
                let counter = 0;
                let selectedNode = this.nodeHead();
                while (counter !== index) {
                    counter++;
                    selectedNode = selectedNode.nextNode
                }
                return selectedNode;
            }

        },
        pop: function() {
            let deletedNode = this.nodeTail();
            this.at(this.size() - 2).nextNode = null;
            return deletedNode;
        },
        contains: function(value) {
            let currentNode = this.nodeHead();
            let contains = false;
            for (let i = 0; i < this.size() - 1; i++) {
                if (currentNode.value === value) {
                    contains = true;
                    return contains;
                } else {
                    currentNode = currentNode.nextNode
                }
                return contains;
            }
        },
        find: function(value) {
            let counter = 0;
            let currentNode = this.nodeHead();
            while (currentNode.nextNode) {
                if (currentNode.value === value) {
                    return counter
                } else {
                    currentNode = currentNode.nextNode
                    counter++;
                }
            }
            return null;
        },
        toString: function() {
            if (this.nodeHead !== null) {
                let currentNode = this.nodeHead();
                let string = ''
                while (currentNode.nextNode) {
                    string += `( ${currentNode.value} ) -> `
                    currentNode = currentNode.nextNode;
                }
                string += `( ${currentNode.value} ) -> null`;
                return string;
            }
        }
    }
}