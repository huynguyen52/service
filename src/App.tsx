import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
