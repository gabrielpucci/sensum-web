import React, { useEffect } from "react";
import Sensations from "./Components/Sensations/Sensations";
import { Router } from "@reach/router";
import "./App.scss";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { useDispatch } from "react-redux";
import { loadAllSensations, pray } from "./State/Sensations/events";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pray());
    dispatch(loadAllSensations());
  }, []);

  return (
    <Router className="App">
      <HomeScreen path="/" default />
      <Sensations path="sensation/:currPage" />
    </Router>
  );
};

export default App;
