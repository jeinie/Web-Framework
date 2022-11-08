let schools = [
    { name : "Yorktown" },
    { name : "Stratford" },
    { name : "Washington & Lee" },
    { name : "Wakefield" }
]

const editName = (oldName, name, arr) =>
    arr.map(item => { // 매개변수로 전달받은 모든 요소(객체)에 대해
        if (item.name === oldName) {
            return {
                ...item,
                name
            }
        } else {
            return item
        }
    })

console.log(schools)

// 'Stratford'를 'HB Woolawn'으로 바꿈
let updatedSchools = editName("Stratford", "HB Woolawn", schools)
console.log(updatedSchools)

// 원본 수정 X (새로운 배열로 반환하므로)
console.log(schools)