import { RouteComponentProps, navigate } from "@reach/router";
import React from "react";
import { useSelector } from "react-redux";
import { Sensation } from "../../Model/Sensation";
import { RootState } from "../../State/util";
import SensationView from "../SensationView/SensationView";
import { SensumIcon } from "../SensumIcon/SensumIcon";
import "./Sensations.scss";

interface SensationsProps extends RouteComponentProps {
  readonly currSensationId?: string;
}

const Sensations: React.FC<SensationsProps> = ({
  currSensationId = "",
}: SensationsProps) => {
  const sensations: Array<Sensation> = useSelector(
    (state: RootState): Array<Sensation> => state.sensations || []
  );

  if (currSensationId === "" && sensations.length > 0) {
    navigate(`/sensation/${sensations[0].id}`);
  }

  const currSensationIndex = sensations.findIndex(
    (s) => s.id === currSensationId
  );
  const currSensation = sensations[currSensationIndex];
  const isFirstPage = currSensationIndex === 0;
  const isLastPage = currSensationIndex === sensations.length - 1;

  const offsetCurrPage = (offset: number) =>
    navigate(`/sensation/${sensations[currSensationIndex + offset].id}`);

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
    alert("Voting up " + currSensationId);
  };
  const voteDown = () => {
    alert("Voting down " + currSensationId);
  };

  return (
    <article className="Sensations">
      {currSensation ? (
        <SensationView
          sensation={currSensation}
          goForth={goForth}
          goBack={goBack}
          isFirst={isFirstPage}
          isLast={isLastPage}
          voteDown={voteDown}
          voteUp={voteUp}
        />
      ) : (
        <SensumIcon />
      )}
    </article>
  );
};

export default Sensations;
