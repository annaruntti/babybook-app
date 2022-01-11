import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Tabs } from "./components/Tabs";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App bg-yellow-100">
      <header className="App-header mb-4">
        <Tabs />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
