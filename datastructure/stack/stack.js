class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            // find the final element
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++
        return newNode
    }

    // remove tail
    pop() {
        if (!this.head) {
            return null
        } else if (this.length === 1) {
            let tmp = this.head
            this.head = null
            this.length = 0
            return tmp
        } else {
            let currentNode = this.head
            for (let i = 1; i <= this.length - 2; i++) {
                currentNode = currentNode.next
            }
            let tmp = currentNode.next
            currentNode.next = null
            this.length--
            return tmp
        }
    }
    printAll() {
        if (this.length === 0) {
            console.log('Empty Linked List')
            return
        }
        let currentNode = this.head
        let consoleString = ''
        while (currentNode !== null) {
            consoleString = consoleString + currentNode.value + ' -> '
            currentNode = currentNode.next
        }
        consoleString = consoleString + 'null'
        console.log(consoleString)
        console.log(`length: ${this.length}`)
    }
}
let myStack = new Stack();
myStack.push('Mike')
myStack.push('Harry')
myStack.pop()
myStack.push('James')
myStack.push('Kevin')
myStack.printAll()
