import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Tabs } from "./components/Tabs";
import { Home } from "./views/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header mb-4">
        <div className="box"></div>
        <Tabs />
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
