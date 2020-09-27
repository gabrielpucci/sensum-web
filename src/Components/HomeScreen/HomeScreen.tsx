import React from "react";
import { ReactComponent as PulseIcon } from "../../Svg/pulse.svg";
import Tamagotchi from "./Tamagotchi/Tamagotchi";
import AppHeader from "../AppHeader/AppHeader";
import { RouteComponentProps } from "@reach/router";
import "./HomeScreen.scss";

const HomeScreen: React.FC<RouteComponentProps> = () => {
  return (
    <div className="HomeScreen">
      <AppHeader rightButton="goToSensations" />
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
