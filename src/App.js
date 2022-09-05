import React from "react";
import './App.css';

function App() {
  return (
    <div>
      <h1>State uitgelegd!</h1>

      <h3>De gekozen kleur is:</h3>

      <button type="button" className="purple">
        Paars
      </button>
      <button type="button" className="red">
        Rood
      </button>
      <button type="button" className="pink">
        Roze
      </button>
    </div>
  );
}

export default App;
