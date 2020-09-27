import React from "react";
import "./App.scss";
import Sensations from "./Components/Sensations/Sensations";

function App() {
  return (
    <div className="App">
      <Sensations
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
    </div>
  );
}

export default App;
