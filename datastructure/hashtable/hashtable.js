class HashTable {
    constructor(size) {
        this.size = size
        this.table = []
        for (let i = 0; i < this.size; i++) {
            this.table.push([])
        }
    }
    // parse
    parse(str) {
        let result = 0
        for (let i = 0;i < str.length;i++) {
            result += str.charCodeAt(i)  // MDN
        }
        return result % this.size
    }

    // division method
    hash1(key) {
        return key % this.size
    }

    // multiplication
    hash2(key) {
        if (typeof key !== 'number') {
            key = this.parse(key)
        }
        let A = (Math.sqrt(5) - 1) / 2
        return Math.floor(this.size * ((A * key) % 1))
    }

    set(key, value) {
        let index = this.hash2(key)
        this.table[index].push({key, value})
    }

    get(key) {
        let index = this.hash2(key)
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                return this.table[index][i]
            }
        }
        return null
    }

    printAll() {
        console.log(this.table)
    }
}


let myHashTable = new HashTable(8)
myHashTable.set(19921119, 'Joe')
myHashTable.set(19871128, 'Riz')
myHashTable.set(20231119, '旺來')
myHashTable.set('white', 'F6969696')


myHashTable.printAll()