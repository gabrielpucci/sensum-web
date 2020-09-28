import React, { useEffect } from "react";
import Sensations from "./Components/Sensations/Sensations";
import { Router } from "@reach/router";
import "./App.scss";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { Sensation } from "./Model/Sensation";
import { RootState } from "./State/util";
import { loadAllSensations } from "./State/Sensations/events";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllSensations());
  });
  const sensations: Array<Sensation> = useSelector(
    (state: RootState): Array<Sensation> => state || []
  );
  return (
    <Router className="App">
      <HomeScreen path="/" default />
      <Sensations path="sensation/:currPage" sensations={sensations} />
    </Router>
  );
};

export default App;
