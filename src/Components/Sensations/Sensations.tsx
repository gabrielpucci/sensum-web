import { RouteComponentProps, navigate } from "@reach/router";
import React from "react";
import { Sensation } from "../../Model/Sensation";
import SensationView from "../SensationView/SensationView";

interface SensationsProps extends RouteComponentProps {
  readonly sensations: Array<Sensation>;
  readonly currPage?: string;
}

const Sensations: React.FC<SensationsProps> = ({
  sensations,
  currPage = "0",
}: SensationsProps) => {
  const currSensation = sensations[parseInt(currPage)];
  const isFirstPage = currPage === "0";
  const isLastPage = parseInt(currPage) === sensations.length - 1;

  const offsetCurrPage = (offset: number) =>
    navigate(`/sensation/${parseInt(currPage) + offset}`);

  const goForth = () => {
    if (!isLastPage) {
      offsetCurrPage(1);
    }
  };
  const goBack = () => {
    if (!isFirstPage) {
      offsetCurrPage(-1);
    }
  };

  const voteUp = () => {
    alert("Voting up " + currPage);
  };
  const voteDown = () => {
    alert("Voting down " + currPage);
  };

  return currSensation ? (
    <SensationView
      sensation={currSensation}
      goForth={goForth}
      goBack={goBack}
      isFirst={isFirstPage}
      isLast={isLastPage}
      voteDown={voteDown}
      voteUp={voteUp}
    />
  ) : null;
};

export default Sensations;
