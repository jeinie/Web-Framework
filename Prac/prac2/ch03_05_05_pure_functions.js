// props를 매개변수로 받아서 새로운 <h1> 객체 반환
const Header = (props) => <h1>{props.title}</h1>
ReactDOM.render(
    <Header title="React uses pure functions" />,
    document.getElementById("react-contaner")
)