// 4. 고차함수
// 함수를 매개변수로 받거나 함수를 결과로 반환하는 함수

const userLogs = userName => msg => console.log(`${userName} -> ${msg}`)
const log = userLogs("grandpa23") // userName = "grandpa23"
log("attempted to load 20 fake members")

const getFakeMembers = count => new Promise((resolves, reject) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status === 200) ? 
        resolves(JSON.parse(request.response).results) : reject(Error(request.statusText))
    request.onerror = (err) => reject(err)
    request.send()
})

getFakeMembers(20).then( // count = 20
    members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")
)