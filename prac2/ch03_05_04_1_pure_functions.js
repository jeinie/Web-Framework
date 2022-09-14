function Header(text) {
    const h1 = document.createElement('h1')
    h1.innerText = text
    const div = document.getElementById("container")
    div.appendChild(h1) // DOM 변하시킴 -> side effect 발생
}

Header("Header() caused sied effects")