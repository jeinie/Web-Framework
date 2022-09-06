const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

// callback을 사용하면 코드의 가독성이 떨어짐

const promise = new Promise( (resolve, reject) => {
    console.log("start");
    fs.readFile('./readme1.txt', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
})
.then(data => {
    console.log('1st reading:', data.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
})
.then(data => {
    console.log('2nd reading:', data.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./readme3.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
})
.then(data => console.log("3rd reading:", data.toString()))
.catch(err => console.error(err.message))
.finally(() => console.log("end"));
