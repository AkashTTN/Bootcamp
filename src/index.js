import { calculateArea, PI } from './Area';
import { unique } from './Unique';

// Filter unique array members using Set.
let arr = [1, 2, 2, 3];
console.log('Unique items in array:', new Set(arr));
console.log('---------------');

// Find the possible combinations of a string and store them in a MAP? 
// To be done later

// Write a program to implement inheritance upto 3 classes.The Class must have public variables and static functions.
class Person {

    NATIONALITY;

    constructor(name = '', nationality = 'Indian') {
        this.name = name;
        this.NATIONALITY = nationality;
    }

    static staticFunction() {
        console.log('This is a static function.');
    }

}

class Employee extends Person {

    constructor(id = null, name) {
        super(name);
        this.id = id;
    }

}

class Developer extends Employee {

    constructor(competency = '', id, name) {
        super(id, name);
        this.competency = competency;
    }

}

class FrontendDeveloper extends Developer {

    constructor(framework = 'React', competency, id, name) {
        super(competency, id, name);
        this.framework = framework;
    }

}

let person = new Person('Akash');
let employee = new Employee('3981', 'Akash');
let developer = new Developer('FEEN', '3981', 'Akash');
let frontendDeveloper = new FrontendDeveloper('React', 'FEEN', '3981', 'Akash');

console.log(person);
console.log(employee);
console.log(developer);
console.log(frontendDeveloper);
Person.staticFunction();
console.log('---------------');


// Write a program to implement a class having static functions
// Static function is created in the above question


// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
console.log('Value of PI:', PI);
console.log('Area of Circle', calculateArea('circle', 2));
console.log('---------------');


// Import a module for filtering unique elements in an array.
console.log('Unique elements in an array: ', unique(arr));
console.log('---------------');


// Write a program to flatten a nested array to single level using arrow functions.
let arr2 = [1, [10, 20, 30], 2, 3];

const flat = array => {

    return array.reduce((flatArray, item) => {

        if (Array.isArray(item)) {
            flatArray = flatArray.concat(item);
            // flatArray += flat(item);
        } else {
            flatArray.push(item);
        }

        return flatArray;

    }, []);

}

console.log(flat(arr2));
console.log('---------------');


// Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)
class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    set addFirst(data) {

        const node = {
            data,
            next: null
        }

        const temp = this.head;

        this.head = node;
        this.head.next = temp;
        this.count++;

        if(this.count === 1) {
            this.tail = this.head;
        }

    }

    set addLast(data) {

        const node = {
            data,
            next: null
        }

        if(this.count === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;

    }

    get length() {
        return this.count;
    }

    get getFirst() {
        return { data: this.head.data };
    }

    get getLast() {
        return { data: this.tail.data };
    }

    removeFirst() {
        if(this.count > 0) {
            this.head = this.head.next;
          }

          this.count--;
    }

}

let list = new LinkedList();
list.addFirst = 1;
list.addLast = 2;
list.addFirst = 10;

console.log('First data in the list', list.getFirst);
console.log('Last data in the list', list.getLast);
console.log('Number of nodes in the list', list.length);
console.log('---------------');


// Implement Map and Set using Es6?
let set = new Set('Akash');
console.log(set.add('TTN'));

let map = new Map([
    ['name', 'Akash'],
    [1, 'one'],
    [null, 'same as undefined'],
    [[1,2,3], 'this is an array'],
    [{}, 'this is an empty object'],
    [{}, 'this is another empty object'],
]);

map.set('another key', 3);
console.log('This is a map', map);
console.log('---------------');


// Implementation of stack (using linked list) ?
class Stack {
    constructor() {
      this.list = new LinkedList();
    }
    
    push(item) {
      this.list.addFirst = item;
    }
    
    pop() {
      if(!this.list.length) {
        return;
      };
      
      let val = this.list.head.data;
      this.list.removeFirst();
      
      return val;
    }
    
    get length() {
      return this.list.length;
    } 

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Size of Stack', stack.length);
console.log('Popped Item:', stack.pop());
console.log('---------------');
