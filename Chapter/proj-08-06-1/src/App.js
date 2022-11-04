import logo from './logo.svg';
import './App.css';
import bigList from './data/bigList';
import List from './component/List';

function App() {
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>{item.name} - {item.email}</p>
    </div>
  )
  return <List data={bigList} renderItem={renderItem}/>
}

export default App;
