import React from "react";
import "./Tamagotchi.scss";

const Tamagotchi: React.FC<{}> = () => {
  return (
    <button
      type="button"
      className="Tamagotchi"
      onClick={() => alert("changing tamagotchi")}
    >
      (o)v(o)
    </button>
  );
};

export default Tamagotchi;
