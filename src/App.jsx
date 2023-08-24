import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Titulo from './components/Titulo';

import "bootstrap/dist/css/bootstrap.min.css";

function App() { 
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <NavBar />
      <Titulo texto="Bienvenido a nuestra tienda en línea" />
      
      <label>
        <strong> {count} </strong>
      </label>
      <button onClick={addCount}> + 1</button>
    </div>
  )
}

export default App;
