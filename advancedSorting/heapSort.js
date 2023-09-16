let heapSize
let arr = [15, 3, 17, 18, 20, 2, 1, 666]

function buildMaxHeap() {
    heapSize = arr.length - 1
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(i)
    }
}

function maxHeapify(i) {
    let largest
    let l = i * 2 + 1
    let r = i * 2 + 2
    if (l <= heapSize && arr[l] > arr[i]) {
        largest = l
    } else {
        largest = i
    }
    if (r <= heapSize && arr[r] > arr[largest]) {
        largest = r
    }
    if (largest !== i) {
        // swap arr[i] with arr[largest]
        let tmp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = tmp
        maxHeapify(largest)
    }
}

function heapSort() {
    buildMaxHeap()
    for (let i = arr.length - 1; i >= 0; i--) {
        // exchange arr[0] with arr[i]
        let tmp = arr[0]
        arr[0] = arr[i]
        arr[i] = tmp
        heapSize -= 1
        maxHeapify(0)
    }
    return arr
}

console.log('Original Array: ', arr)
console.log('Sorted Array: ', heapSort(arr))