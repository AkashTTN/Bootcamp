// Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.
console.log('Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.');

arr = [3, 62, 234, 7, 23, 74, 23, 76, 92];

numbersGreaterThan70 = arr.filter(item => item > 70);

console.log(numbersGreaterThan70);


// Q3. Create a markup template using string literal

const song = {

    name: 'Dying to live',

    artist: 'Tupac',

    featuring: 'Biggie Smalls'

};

let html = `<div class="song">

<p>

  ${song.name} - ${song.artist}

  (Featuring ${song.featuring})

</p>

</div>`

console.log(html);


// Q4.Extract all keys inside address object from user object using destructuring ?

const user = {

    firstName: 'Sahil',

    lastName: 'Dua',

    Address: {

        Line1: 'address line 1',

        Line2: 'address line 2',

        State: 'Delhi',

        Pin: 110085,

        Country: 'India',

        City: 'New Delhi',

    },

    phoneNo: 9999999999

}

let { Address: {Line1, Line2, State, Pin, Country, City} } = user;
console.log(Line1, Line2);
