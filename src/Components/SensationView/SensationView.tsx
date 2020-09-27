import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactMarkdown from "react-markdown";
import AppHeader from "../AppHeader/AppHeader";
import {
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./SensationView.scss";
import { Sensation } from "../../Model/Sensation";

interface SensationViewProps {
  readonly sensation: Sensation;
  readonly goForth: () => void;
  readonly goBack: () => void;
  readonly isFirst: boolean;
  readonly isLast: boolean;
  readonly voteUp: () => void;
  readonly voteDown: () => void;
}

const SensationView: React.FC<SensationViewProps> = ({
  sensation,
  goForth,
  goBack,
  isFirst,
  isLast,
  voteDown,
  voteUp,
}: SensationViewProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      goBack();
    }
    if (e.key === "ArrowRight") {
      goForth();
    }
  };
  const opacity: string = `${
    ((sensation.votes.up + 1) / (sensation.votes.down + 1)) * 100
  }%`;
  return (
    <article className="SensationView" onKeyDown={handleKeyDown} tabIndex={0}>
      <AppHeader rightButton="goToHome" />
      <section className="SensationBody">
        <div className="SensationBodyText" style={{ opacity }}>
          <ReactMarkdown source={sensation.text} />
        </div>
        <address className="Signature">~ {sensation.signature}</address>
      </section>
      <footer className="Navigator">
        <div className="Votes">
          <button className="VoteBtn NegVotes" onClick={voteDown}>
            <FontAwesomeIcon icon={faMinus} /> {sensation.votes.down}
          </button>
          <button className="VoteBtn PosVotes" onClick={voteUp}>
            <FontAwesomeIcon icon={faPlus} /> {sensation.votes.up}
          </button>
        </div>
        <nav className="NavArrows">
          <button
            className="NavBtn LeftArrow"
            onClick={goBack}
            disabled={isFirst}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="NavBtn RightArrow"
            onClick={goForth}
            disabled={isLast}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </nav>
      </footer>
    </article>
  );
};

export default SensationView;
