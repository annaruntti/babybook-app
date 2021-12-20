import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Tabs } from "./components/Tabs";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-3xl font-bold">
          Täytä tiedot ja kokoa vauvasi tarina!
        </h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
