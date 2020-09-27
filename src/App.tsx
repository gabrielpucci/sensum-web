import React from "react";
import Sensations from "./Components/Sensations/Sensations";
import { Router } from "@reach/router";
import "./App.scss";
import HomeScreen from "./Components/HomeScreen/HomeScreen";

function App() {
  return (
    <Router className="App">
      <HomeScreen path="/" />
      <Sensations
        path="sensation"
        sensations={[
          {
            text: "Nalgueame pero _también_ dame besitos en la frente",
            signature: "Anonymous",
            votes: {
              down: 0,
              up: 0,
            },
          },
          {
            text: "Moni",
            signature: "Tito",
            votes: {
              down: 1,
              up: 300,
            },
          },
          {
            text: "Nalgueame pero _también_ dame besitos en la frente",
            signature: "Anonymous",
            votes: {
              down: 0,
              up: 0,
            },
          },
        ]}
      />
    </Router>
  );
}

export default App;
