function printFileContent(content) {
    console.log('Contents of the file are');
    console.log(content);
}

// Reading file synchronously
const fs = require('fs');

const content = fs.readFileSync('text.txt', 'utf-8');

printFileContent(content);

// Reading file asynchronously
const fileContent = fs.readFile('text.txt', 'utf-8', (err, content) => printFileContent(content));

exports.printFileContent = printFileContent;