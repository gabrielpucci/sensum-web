import React from "react";
import AppHeader from "../AppHeader/AppHeader";

const Sensations: React.FC<{}> = () => {
  return (
    <article className="Sensations">
      <AppHeader
        rightButton="goToHome"
        onClickRightButton={() => alert("Home")}
      />
    </article>
  );
};

export default Sensations;
