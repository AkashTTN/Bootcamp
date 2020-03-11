"use strict";

var _Area = require("./Area");

var _Unique = require("./Unique");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Filter unique array members using Set.
var arr = [1, 2, 2, 3];
console.log('Unique items in array:', new Set(arr));
console.log('---------------'); // Find the possible combinations of a string and store them in a MAP? 

function getPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var index = 0; index < string.length; index++) {
    var firstChar = string[index];
    var charLeft = string.slice(0, index) + string.slice(index + 1);
    var innerPermutations = getPermutations(charLeft);

    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }

  return results;
}

console.log('All possible combinations of string "abc"', getPermutations('abc'));
console.log('---------------'); // Write a program to implement inheritance upto 3 classes.The Class must have public variables and static functions.

var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var nationality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Indian';

    _classCallCheck(this, Person);

    _defineProperty(this, "NATIONALITY", 'Indian');

    this.name = name; // this.NATIONALITY = nationality;
  }

  _createClass(Person, null, [{
    key: "staticFunction",
    value: function staticFunction() {
      console.log('This is a static function.');
    }
  }]);

  return Person;
}();

var Employee = /*#__PURE__*/function (_Person) {
  _inherits(Employee, _Person);

  function Employee() {
    var _this;

    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var name = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Employee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Employee).call(this, name));
    _this.id = id;
    return _this;
  }

  return Employee;
}(Person);

var Developer = /*#__PURE__*/function (_Employee) {
  _inherits(Developer, _Employee);

  function Developer() {
    var _this2;

    var competency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = arguments.length > 1 ? arguments[1] : undefined;
    var name = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Developer);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Developer).call(this, id, name));
    _this2.competency = competency;
    return _this2;
  }

  return Developer;
}(Employee);

var FrontendDeveloper = /*#__PURE__*/function (_Developer) {
  _inherits(FrontendDeveloper, _Developer);

  function FrontendDeveloper() {
    var _this3;

    var framework = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'React';
    var competency = arguments.length > 1 ? arguments[1] : undefined;
    var id = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, FrontendDeveloper);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(FrontendDeveloper).call(this, competency, id, name));
    _this3.framework = framework;
    return _this3;
  }

  return FrontendDeveloper;
}(Developer);

var person = new Person('Akash');
var employee = new Employee('3981', 'Akash');
var developer = new Developer('FEEN', '3981', 'Akash');
var frontendDeveloper = new FrontendDeveloper('React', 'FEEN', '3981', 'Akash');
console.log(person);
console.log(employee);
console.log(developer);
console.log(frontendDeveloper);
Person.staticFunction();
console.log('---------------'); // Write a program to implement a class having static functions
// Static function is created in the above question
// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

console.log('Value of PI:', _Area.PI);
console.log('Area of Circle', (0, _Area.calculateArea)('circle', 2));
console.log('---------------'); // Import a module for filtering unique elements in an array.

console.log('Unique elements in an array: ', (0, _Unique.unique)(arr));
console.log('---------------'); // Write a program to flatten a nested array to single level using arrow functions.

var arr2 = [1, [10, 20, 30], 2, 3];

var flat = function flat(array) {
  return array.reduce(function (flatArray, item) {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(item); // flatArray += flat(item);
    } else {
      flatArray.push(item);
    }

    return flatArray;
  }, []);
};

console.log(flat(arr2));
console.log('---------------'); // Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  _createClass(LinkedList, [{
    key: "removeFirst",
    value: function removeFirst() {
      if (this.count > 0) {
        this.head = this.head.next;
      }

      this.count--;
    }
  }, {
    key: "addFirst",
    set: function set(data) {
      var node = {
        data: data,
        next: null
      };
      var temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.count++;

      if (this.count === 1) {
        this.tail = this.head;
      }
    }
  }, {
    key: "addLast",
    set: function set(data) {
      var node = {
        data: data,
        next: null
      };

      if (this.count === 0) {
        this.head = node;
      } else {
        this.tail.next = node;
      }

      this.tail = node;
      this.count++;
    }
  }, {
    key: "length",
    get: function get() {
      return this.count;
    }
  }, {
    key: "getFirst",
    get: function get() {
      return {
        data: this.head.data
      };
    }
  }, {
    key: "getLast",
    get: function get() {
      return {
        data: this.tail.data
      };
    }
  }]);

  return LinkedList;
}();

var list = new LinkedList();
list.addFirst = 1;
list.addLast = 2;
list.addFirst = 10;
console.log('First data in the list', list.getFirst);
console.log('Last data in the list', list.getLast);
console.log('Number of nodes in the list', list.length);
console.log('---------------'); // Implement Map and Set using Es6?

var set = new Set('Akash');
console.log(set.add('TTN'));
var map = new Map([['name', 'Akash'], [1, 'one'], [null, 'same as undefined'], [[1, 2, 3], 'this is an array'], [{}, 'this is an empty object'], [{}, 'this is another empty object']]);
map.set('another key', 3);
console.log('This is a map', map);
console.log('---------------'); // Implementation of stack (using linked list) ?

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.list = new LinkedList();
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this.list.addFirst = item;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.list.length) {
        return;
      }

      ;
      var val = this.list.head.data;
      this.list.removeFirst();
      return val;
    }
  }, {
    key: "length",
    get: function get() {
      return this.list.length;
    }
  }]);

  return Stack;
}();

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Size of Stack', stack.length);
console.log('Popped Item:', stack.pop());
console.log('---------------');