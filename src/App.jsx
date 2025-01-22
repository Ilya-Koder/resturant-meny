// src/App.jsx
import React from "react";
import { meny } from "./data";
import Menu from "./Menu";
import styles from "./Global.modules.css";

function App() {
  return (
    <div>
      <h1 className={styles.tittel}>Restaurant Meny</h1>
      <Menu dishes={meny} /> {/* Sender meny-data som props til Menu */}
    </div>
  );
}

export default App;
