import React from "react";
import "./HomeScreen.scss";
import { ReactComponent as PulseIcon } from "../../Svg/pulse.svg";
import Tamagotchi from "./Tamagotchi/Tamagotchi";
import AppHeader from "../AppHeader/AppHeader";

const HomeScreen: React.FC<{}> = () => {
  return (
    <div className="HomeScreen">
      <AppHeader
        rightButton="goToSensations"
        onClickRightButton={() => alert("Sensations")}
      />
      <main>
        <Tamagotchi />
        <button
          type="button"
          className="Token"
          onClick={() => alert("Using token")}
        >
          <PulseIcon className="PulseIcon" />
        </button>
      </main>
    </div>
  );
};

export default HomeScreen;
