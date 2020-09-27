import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { Sensation } from "../../Model/Sensation";
import SensationView from "../SensationView/SensationView";

interface SensationsProps extends RouteComponentProps {
  sensations: Array<Sensation>;
}

const Sensations: React.FC<SensationsProps> = ({
  sensations,
}: SensationsProps) => {
  const [currPage, setCurrPage] = useState(0);
  const isFirstPage = currPage === 0;
  const isLastPage = currPage === sensations.length - 1;
  const goForth = () => {
    if (!isLastPage) {
      setCurrPage(currPage + 1);
    }
  };
  const goBack = () => {
    if (!isFirstPage) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <SensationView
      sensation={sensations[currPage]}
      goForth={goForth}
      goBack={goBack}
      isFirst={isFirstPage}
      isLast={isLastPage}
    />
  );
};

export default Sensations;
