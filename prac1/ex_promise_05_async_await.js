const fs = require('fs');
const fsPromises = fs.promises;

console.log("start");
(async () => {
    try {
        let data = await fsPromises.readFile('./readme1.txt');
        console.log("1st reading:", data.toString());

        data = await fsPromises.readFile('./readme2.txt');
        console.log("2nd reading:", data.toString());

        data = await fsPromises.readFile('./readme3.txt');
        console.log("3rd reading:", data.toString());
    }
    catch(err){
        console.error(err.message);
    }
    finally{
        console.log("end");
    }
})();