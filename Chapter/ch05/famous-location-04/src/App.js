import logo from './logo.svg';
import './App.css';
import data from './data/famous-location.json'
import Famous from './components/Famous'

function App() {
  return (
    <Famous famous={data} title="Famous places"/>
  );
}

export default App;
