const fs = require('fs');
console.log('start');

try {
    let data = fs.readFileSync('./readme1.txt');
    console.log('1st reading:', data.toString());

    data = fs.readFileSync('./readme2.txt');
    console.log('2nd reading:', data.toString());

    data = fs.readFileSync('./readme3.txt');
    console.log('3rd reading:', data.toString());
}
catch(err){
    console.error(err.message);
}
finally{
    console.log("end");
}