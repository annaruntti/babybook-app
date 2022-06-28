import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Tabs } from "./components/Tabs";
import { Information } from "./views/Information";
import { Growth } from "./views/Growth";
import { Story } from "./views/Story";

function App() {
  return (
    <div className="App">
      <header className="App-header mb-4">
        <div className="box"></div>
        <Tabs />
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/kehitys" element={<Growth />} />
          <Route path="/lapsen-tarina" element={<Story />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
