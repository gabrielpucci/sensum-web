import React from "react";
import "./HomeScreen.scss";
import { ReactComponent as PulseIcon } from "../../Svg/pulse.svg";
import Tamagotchi from "../Tamagotchi/Tamagotchi";

const HomeScreen: React.FC<{}> = () => {
  return (
    <div className="HomeScreen">
      <nav>
        <button
          type="button"
          className="AppName"
          onClick={() => alert("24 electrones en órbita")}
        >
          sensum
        </button>
        <button
          type="button"
          className="Pulse"
          onClick={() => alert("redirecting to sensations")}
        >
          <PulseIcon className="PulseIcon" />
        </button>
      </nav>
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
