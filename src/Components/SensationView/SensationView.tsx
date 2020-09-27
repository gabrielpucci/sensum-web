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
  sensation: Sensation;
  goForth: () => void;
  goBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const SensationView: React.FC<SensationViewProps> = ({
  sensation,
  goForth,
  goBack,
  isFirst,
  isLast,
}: SensationViewProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      goBack();
    }
    if (e.key === "ArrowRight") {
      goForth();
    }
  };
  return (
    <article className="SensationView" onKeyDown={handleKeyDown} tabIndex={0}>
      <AppHeader rightButton="goToHome" />
      <section className="SensationBody">
        <div className="SensationBodyText">
          <ReactMarkdown source={sensation.text} />
        </div>
        <address className="Signature">~ {sensation.signature}</address>
      </section>
      <footer className="Navigator">
        <div className="Votes">
          <button className="VoteBtn NegVotes">
            <FontAwesomeIcon icon={faMinus} /> {sensation.votes.down}
          </button>
          <button className="VoteBtn PosVotes">
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
