// Select all the list items on the page and convert to array.

// Filter for only the elements that contain the word 'flexbox'

// map down to a list of time strings

// map to an array of seconds

// reduce to get total using .filter and .map

liObject = document.getElementsByTagName('li');
liArray = [...Object.values(liObject)];
console.log('Array of all li items:', liArray);
liFlexbox = liArray.filter(liItem => liItem.innerText === "Flexbox Video");

console.log(liFlexbox);

arrayTimeStamps = liArray.map(item => item.getAttribute('data-time'));
console.log(arrayTimeStamps);

arrayTimeStampSeconds = arrayTimeStamps.map(item => item.split(':')[1]);
console.log(arrayTimeStampSeconds);