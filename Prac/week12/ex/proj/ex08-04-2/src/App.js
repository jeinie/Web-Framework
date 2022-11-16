/**
 * ex08-04-2 from ch08-06-2
 * ./src/App.js
 */

import bigList from "./data/bigList";
// import FixedSizeList from react-window library
// code here
import {FixedSizeList} from 'react-window';

const App = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{display: "flex"} }}>
      <img 
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {/* data items from bigList
           name, email, job, country
  code here */}
          {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      // define properties of FixedSizeList component
      // https://react-window.vercel.app/#/examples/list/fixed-size
      // height, width, itemCount, itemSize
      // code here
      height={window.innerHeight - 20}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export default App;