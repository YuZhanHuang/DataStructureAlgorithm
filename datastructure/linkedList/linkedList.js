class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
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

    // remove head
    shift() {
        if (!this.head) {
            return null
        } else if (this.length === 1) {
            let tmp = this.head
            this.head = null
            this.length = 0
            return tmp
        } else {
            let tmp = this.head
            this.head = this.head.next
            this.length--
            return tmp
        }
    }

    //insert value at head
    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            let tmp = this.head
            this.head = newNode
            this.head.next = tmp
        }
        this.length++
        return newNode
    }

    insertAt(index, value) {
        if (index > this.length || index < 0) {
            return null
        } else if (index === 0) {
            return this.unshift(value)
        } else if (index === this.length) {
            return this.push(value)
        }
        let currentNode = this.head
        let newNode = new Node(value)
        for (let i = 1; i <= index - 1; i++) {
            currentNode = currentNode.next
        }
        newNode.next = currentNode.next
        currentNode.next = newNode
        this.length++
        return newNode
    }

    removeAt(index) {
        if (index > this.length || index < 0) {
            return null
        } else if (index === 0) {
            return this.shift()
        } else if (index === this.length) {
            return this.pop()
        }

        let currentNode = this.head
        for (let i = 1; i <= index - 1; i++) {
            currentNode = currentNode.next
        }
        let tmp = currentNode.next
        currentNode.next = currentNode.next.next
        this.length--
        return tmp
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null
        } else if (index === 0) {
            return this.head
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
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


let myLinkList = new LinkedList();
myLinkList.push('Mike')
myLinkList.push('Harry')
myLinkList.push('James')
myLinkList.push('Kevin')
myLinkList.printAll()
popNode = myLinkList.pop()
console.log(`popped value`, popNode.value)
myLinkList.printAll()
popNode = myLinkList.shift()
console.log(`shift value`, popNode.value)
myLinkList.printAll()
console.log(`unshift value `, 'Joe')
myLinkList.unshift('Joe')
myLinkList.printAll()
console.log(`insert at value `, myLinkList.insertAt(1, 'Riz').value)
myLinkList.printAll()
console.log(`remove at 2 `, myLinkList.removeAt(2).value)
myLinkList.printAll()
console.log('get index 0', myLinkList.get(0).value)
console.log('get index 1', myLinkList.get(1).value)
console.log('get index 2', myLinkList.get(2).value)
