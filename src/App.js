import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/chooseColor';

function App() {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;