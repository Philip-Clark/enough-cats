import { uid } from 'react-uid';
import './App.css';
import { Cat } from './components/cat';
import newRandomName from './dataObjects/nameGenerator';
import Position from './dataObjects/position';
import catObject from './dataObjects/cat';

function App() {
  return (
    <div>
      <Cat
        movementArea={{ min: Position(0, 0), max: Position(900, 500) }}
        name={newRandomName()}
        cat={catObject()}
      />
      <Cat
        movementArea={{ min: Position(0, 0), max: Position(900, 500) }}
        name={newRandomName()}
        cat={catObject()}
      />
      <Cat
        movementArea={{ min: Position(0, 0), max: Position(900, 500) }}
        name={newRandomName()}
        cat={catObject()}
      />
      <Cat
        movementArea={{ min: Position(0, 0), max: Position(900, 500) }}
        name={newRandomName()}
        cat={catObject()}
      />
    </div>
  );
}

export default App;
