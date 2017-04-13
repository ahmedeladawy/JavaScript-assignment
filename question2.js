// Explain the difference between a stack and a queue.
// Write a Javascript constructor called Stack and another Javascript class called Queue.
// Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
// Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
// Make sure that each constructor/class behaves properly as per definitions of stacks and queues.



class Stack {
   constructor() {
       this.arr = [];

   }
}
Stack.prototype.add = function(num) {
   this.arr.push(num);
   return num;
};

Stack.prototype.remove = function() {
   return (this.arr.pop());
};



class Queue {
   constructor(arr) {
       this.arr = []
   }
}

Queue.prototype.add = function(num) {
   this.arr.unshift(num);
   return num;
};

Queue.prototype.remove = function() {
   return (this.arr.shift());
};




let show = new Stack();
let showQ = new Queue();
console.log(show.add(10));
console.log(show.add(4));
console.log(show.remove());
console.log(show);
console.log(showQ.add(20));
console.log(showQ.add(50));
console.log(showQ.remove());
console.log(showQ);
