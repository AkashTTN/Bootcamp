// Create a hierarchy of person, employee and developers. 
console.log('Create a hierarchy of person, employee and developers.');
function Person(name) {
    this.name = name;
}

function Employee(name, id) {
    Person.call(this, name);
    this.id = id;
}

function Developer(name, id, competency) {
    Employee.call(this, name, id);
    this.competency = competency;
    // this.name = name;
    // this.id = id;
}

var developer = new Developer('Akash', 1, 'FEEN');

console.log(developer);


// Create a function which returns number of invocations and number of instances of a function.
console.log('Create a function which returns number of invocations and number of instances of a function.');
function func() {
    func.totalInvoke += 1;
    if(this != window) {
        this.__proto__.instanceCounter += 1;
    }
}

func.totalInvoke = 0;
func.prototype.instanceCounter = 0;

// console.dir(func);
func();
func();
var a = new func();
// var b = new func();
// var c = new func();
// console.dir(func);
// console.dir(a);
console.log(`Invoked: ${func.totalInvoke - func.prototype.instanceCounter}. Instance: ${func.prototype.instanceCounter}`);


// Create a counter using closures.
console.log('Create a counter using closures.');
function startCounter(initial) {
    return function() {
        initial += 1;
        return initial;
    }
}

// Counter start from 1
counterFromOne = startCounter(1);
counterFromOne();

// Counter start from 2
counterFromTwo = startCounter(2);
counterFromTwo();
counterFromTwo();

console.log(counterFromOne(), counterFromTwo());
// Output: 3 5


// Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
console.log('Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.');
arr = [1,2,3,4,5];

(function printAfterDelay(arr, i) {
    setTimeout(function() {
        console.log(arr[i]);
        if(i < arr.length-1) {
            i += 1;
            printAfterDelay(arr, i);
        }
    }, 3000);
})(arr, 0);