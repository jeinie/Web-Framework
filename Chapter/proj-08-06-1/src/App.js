import bigList from "./data/bigList";
import List from "./component/List";

const App = () => {
    const renderItem = item => (
        <div style={{ display: "flex" }}>
            <img src={item.avatar} alt={item.name} width={50}/>
            <p>{item.name} - {item.email}</p>
        </div>
    )
    return <List data={bigList} renderItem={renderItem}/>
}

export default App;