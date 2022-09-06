const fs = require('fs');
const fsPromises = fs.promises;

console.log("start");

fsPromises.readFile('./readme1.txt')
.then(data => {
    console.log("1st reading:", data.toString());
    return fsPromises.readFile('./readme2.txt');
})
.then(data => {
    console.log("2nd reading:", data.toString());
    return fsPromises.readFile('./readme3.txt');
})
.then(data => console.log("3rd reading:", data.toString()))
.catch(err => console.error(err.message))
.finally(() => console.log("end"))