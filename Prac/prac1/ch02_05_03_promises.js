const getFakeMembers = async() => {
    try {
        let response = await fetch("https://api.randomuser.me/?nat=US&results=10");
        let {results} = await response.json(); // 변수와 이름이 같은 속성값을 가져옴 (객체 구조분해 할당)
        console.log(results);
    }
    catch(error) {
        console.error(error);
    }
};

getFakeMembers();