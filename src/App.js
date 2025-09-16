import React, { useState } from 'react';
import './App.css';
import WorkshopInfo from './WorkshopInfo';
import Schedule from './Schedule';

function App(){
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>React CI/CD Demo</h1>
        <p className="subtitle">DevOps Hands-on Workshop</p>
      </header>
      <section className="counter-section">
        <p data-testid="count">You clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
      </section>
      <WorkshopInfo/>
      <Schedule/>
      <footer>
        <p>Contact: tejasjc@gmail.com</p>
      </footer>
    </div>
  );
}
export default App;