import logo from './logo.svg';
import './App.css';
import bigList from './data/bigList';
import {FixedSizeList} from "react-window"

const App = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{display: "flex"}}}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
      <p>{bigList[index].name} - {bigList[index].name}</p>
    </div>
  )

  return (
    <FixedSizeList 
    height={window.innerHeight-20}
    width={window.innerWidth-20}
    itemCount={bigList.length} itemSize={50}>
      {renderRow}
    </FixedSizeList>
  )
}

export default App;
