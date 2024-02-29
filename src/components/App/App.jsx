import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NavBar from "../NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
