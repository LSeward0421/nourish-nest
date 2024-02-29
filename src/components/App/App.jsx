import React, { useEffect } from 'react'
import "./App.css";
import { getFoodData } from "../../api/apiCalls";

const App = () => {
  useEffect(() => {
    getFoodData('apple')
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, welcome to Nourish Nest!</p>
      </header>
    </div>
  );
}

export default App;
