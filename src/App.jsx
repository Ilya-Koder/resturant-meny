// src/App.jsx
import React from "react";
import { meny } from "./data"; // Importer meny-dataene
import Menu from "./Menu"; // Importer Menu-komponenten

function App() {
  return (
    <div>
      <h1>Restaurant Meny</h1>
      <Menu dishes={meny} /> {/* Sender meny-data som props til Menu */}
    </div>
  );
}

export default App;
