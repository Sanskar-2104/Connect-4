import './App.css';
import Board from './components/Board';
import DropZone from './components/DropZone';

function App() {
  return (
    <div className="App">
      <DropZone/>
      <Board/>
    </div>
  );
}

export default App;
