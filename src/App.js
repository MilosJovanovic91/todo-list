import {useState} from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div className="App">
      <form>
        <input type="text" onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>Add todo</button>
      </form>
    </div>
  );
}

export default App;
