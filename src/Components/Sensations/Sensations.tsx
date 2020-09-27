import React, { useState } from "react";
import { Sensation } from "../../Model/Sensation";
import SensationView from "../SensationView/SensationView";

const Sensations: React.FC<{}> = () => {
  const [currPage, setCurrPage] = useState(0);
  const goForth = () => setCurrPage(currPage + 1);
  const goBack = () => setCurrPage(currPage - 1);
  const sensations: Array<Sensation> = [
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
  ];

  return (
    <SensationView
      sensation={sensations[currPage]}
      goForth={goForth}
      goBack={goBack}
      isFirst={currPage === 0}
      isLast={currPage === sensations.length - 1}
    />
  );
};

export default Sensations;
