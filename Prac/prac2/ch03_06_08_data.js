const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}

console.log(schools)

const schoolArray = Object.keys(schools).map(key => 
    ({
        name: key,
        wins: schools[key]
    })
)

console.log(Object.keys(schools))
console.log(schoolArray)