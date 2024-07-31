class PriorityQueue {
    constructor() {
        // Initialize _heap as an empty array
        this._heap = [];
    }

    // Method to add an operation to the heap
    addOperation(op) {
        // Push the operation onto the heap
        this._heap.push(op);
        // For simplicity, we assume the heap is a simple array
        // In a real priority queue, you'd need to maintain heap properties
        this._heap.sort((a, b) => a.priority - b.priority);
    }

    // Method to get the next operation (not a full heap implementation)
    nextOperation() {
        return this._heap.shift(); // Removes and returns the first element
    }
}

// Example usage:
let pq = new PriorityQueue();
pq.addOperation({task: 'Task 1', priority: 2});
pq.addOperation({task: 'Task 2', priority: 1});

console.log(pq.nextOperation()); // Outputs: {task: 'Task 2', priority: 1}
console.log(pq.nextOperation()); // Outputs: {task: 'Task 1', priority: 2}
