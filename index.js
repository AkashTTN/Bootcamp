const fs = require('fs')
const zlib = require('zlib');
const { exec, spawn, execFile } = require('child_process');
const superagent = require('superagent');

// Buffers
console.log('--------Buffers Output------')

// Buffer created from data
const buffer = Buffer.from(new String('Akash'));
// Prints the string version of buffer
console.log(`Length of buffer ${buffer} is ${buffer.length}`);
// Prints the buffer object
console.log(Buffer.from('Akash'));

// Sliced buffer and original buffer are connected by reference
const slicedBuffer = buffer.slice(0, 1);
buffer[0]--;

console.log(`Original Buffer value: ${buffer}. Sliced Buffer: ${slicedBuffer}`);


// Streams

// Create a readable stream
let readerStream = fs.createReadStream('./text.txt');
let data = '';

readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log('--------Streams Output------')
    console.log('Finished reading data', data);
});

// Compress the file input.txt to input.txt.gz
fs.createReadStream('./text.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./text.txt.gz'));


// Child Processes
console.log('--------Child Process Output------')

const child = spawn('pwd');

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});


exec('cat ./text.txt | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Number of lines ${stdout}`);
});

const secondChild = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});


// Using async/await for a hitting an API
async function getGitHubUserData(username) {

    try {
        let response = await superagent.get(`https://api.github.com/users/${username}`).set('User-Agent', 'AkashTTN');
        const userData = response.body;

        console.log(`GitHub User ${username} data:`);
        console.log(userData);
    } catch {
        console.log('Request Failed');
    }
    
}

getGitHubUserData('AkashTTN');