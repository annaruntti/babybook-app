import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Tabs } from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
