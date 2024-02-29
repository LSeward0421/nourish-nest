import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getFoodData } from "../../api/apiCalls";
import HomePage from "../../pages/HomePage";
import NavBar from "../NavBar/NavBar";

const App = () => {
  useEffect(() => {
    getFoodData("apple")
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
